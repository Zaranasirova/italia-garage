// import React, { createContext, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export const MainContext = createContext();

// export const GlobalContext = ({ children }) => {
//   //Naming the logo title according to the locator//
//   const location = useLocation();
//   const path = location.pathname;
//   const formattedPath = path.replace("/", "");
//   const title = `Garage Italia ${
//     formattedPath ? `/ ${formattedPath}` : ""
//   }`.toUpperCase();
// //prodyct//
// const [product, setProduct] = useState({});
// const { productId } = useParams();
// const [loading, setLoading]=useState(false);

//   const getSingleProduct=async ()=>{
//     setLoading(true);
//     try {
//       const res=await axios.get(`${process.env.REACT_APP_SINGLE_PRODUCT}/${productId}`).then(res=>res.data);
//       setProduct(res);
//     } catch (error) {
//       console.log(error)
//     }finally{
//       setLoading(false);
//     }
//   };

// //basket//
// const [cartIsOpen,setCartIsOpen]=useState(false);

// const [cartList,setCartList]=useState([]);

// const addToCart=()=>{

// }

// const globalData = { path, title,cartIsOpen, setCartIsOpen,cartList,setCartList,addToCart,product,setProduct,getSingleProduct };
// return (
//     <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
//   );
// };

// export default GlobalContext;

import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
const [totalPrice, setTotalPrice]=useState(0)
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
      setLoading(false);
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

 const calcTotalPrice = ()=>{
  const multiSum=cartList.map(item=>item.quantity*item.price);
  const totalSum=multiSum.reduce((acc,curr)=>acc+curr,0);
  setTotalPrice(totalSum)
 }
const removeProductCart=(id)=>{
const updatedCart=cartList.filter(item=>item.id!==id);
setCartList(updatedCart);
}


useEffect(()=>{
  calcTotalPrice();
},[cartList]);

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
  };

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
