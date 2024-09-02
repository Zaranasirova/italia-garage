import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { quantityTypes } from "../DB/types";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const formattedPath = path.replace("/", "");
  const title = `Garage Italia ${
    formattedPath ? `/ ${formattedPath}` : ""
  }`.toUpperCase();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const getSingleProduct = async (productId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SINGLE_PRODUCT}/${productId}`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      
    }
  };

  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartList, setCartList] = useState([]);

  const addToCart = () => {
    const existing = cartList.find((item) => item.id === product.id);
    if (existing) {
      const updated = cartList.filter((item) => {
        if (item.id === existing.id) {
          return {
            ...item,
            quantity: item.quantity++,
          };
        } else {
          return item;
        }
      });
      setCartList(updated);
    } else {
      setCartList((prev) => [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const calcTotalPrice = () => {
    const multiSum = cartList.map((item) => item.quantity * item.price);
    const totalSum = multiSum.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(totalSum);
  };
  const removeProductCart = (id) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
  };
  const quantityControl = (id, type) => {
    const existing = cartList.find((item) => item.id === id);
    if (existing) {
      switch (type) {
        case quantityTypes.increment:
          quantityHelperFunction(id, quantityTypes.increment);
          break;
        case quantityTypes.decrement:
          quantityHelperFunction(id, quantityTypes.decrement);
          break;
      }
    }
  };

  const quantityHelperFunction = (id, type) => {
    const updatedQuantity = cartList.filter((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity:
            type === quantityTypes.increment
              ? item.quantity++
              : item.quantity > 1
              ? item.quantity--
              : 0,
        };
      } else {
        return item;
      }
    });
    setCartList(updatedQuantity);
  };

  useEffect(() => {
    quantityControl();
    calcTotalPrice();
  }, [cartList]);

  const globalData = {
    path,
    title,
    cartIsOpen,
    setCartIsOpen,
    cartList,
    setCartList,
    addToCart,
    product,
    setProduct,
    getSingleProduct,
    loading,
    totalPrice,
    removeProductCart,
    quantityControl,
  };

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
