import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { quantityTypes } from "../DB/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const formattedPath = path.replace("/", "");
  const title = `Garage Italia ${
    formattedPath ? `/ ${formattedPath}` : ""
  }`.toUpperCase();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartList, setCartList] = useState([]);
////////////////////////////////////////////getSingleProduct///////////////////////////////////////////
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
      }, 3000);
    }
  };
///////////////////////////////////AddToCart///////////////////////////////////////////////////////////
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
/////////////////////////////////////TotalPrice///////////////////////////////////////////////////////
  const calcTotalPrice = () => {
    const multiSum = cartList.map((item) => item.quantity * item.price);
    const totalSum = multiSum.reduce((acc, curr) => acc + curr, 0);
    const formattedSum = (Math.round(totalSum * 100) / 100).toFixed(2);
    setTotalPrice(formattedSum);
  };
/////////////////////////////////////RemoveProduct/////////////////////////////////////////////////////////
  const removeProductCart = (id) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
  };
  /////////////////////////////Quantity increment,decrement///////////////////////////////////////
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
//////////////////////////////////Quantity Helper Function///////////////////////////////////////////////////////
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

  //////////////////////////////////////////////CheckLocalStorage/////////////////////////////////////////
  const checkLocalStorage = async () => {
    const localResponse = localStorage.getItem("cartList");
    if (localResponse !== null) {
      const savedCartList = await JSON.parse(localResponse);
      setCartList(savedCartList);
    }
  };
/////////////////////////////////////////////Saved Cart LocalStorage///////////////////////////////////////////
  const savedCartInLocalStorage = async () => {
    await localStorage.setItem("cartList", JSON.stringify(cartList));
  };
////////////////////////////////////////////UseEffect///////////////////////////////////////////////
  useEffect(() => {
    checkLocalStorage();
  }, []);

  useEffect(() => {
    quantityControl();
    calcTotalPrice();
    savedCartInLocalStorage();
  }, [cartList]);
  /////////////////////////////////////SignUp///////////////////////////////////////////
  const handleSignUp = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(signEmail) && signPassword.length > 0) {
      let error = "";

      switch (true) {
        case signPassword !== confirmPassword:
          error = "Şifrə uyğun deyil!";
          break;
        case signPassword.length <= 7:
          error = "Şifrə 7 simvoldan çox olmalıdır.";
          break;
        case signPassword.length >= 15:
          error = "Şifrə 15 simvoldan az olmalıdır.";
          break;
        case !/[!@#$%^&*]/.test(signPassword):
          error = "Şifrə xüsusi simvol (!@#$%^&*) ehtiva etməlidir.";
          break;
        case !/[A-Z]/.test(signPassword):
          error = "Şifrə ən azı bir böyük hərf ehtiva etməlidir.";
          break;
        default:
          const users = JSON.parse(localStorage.getItem("users")) || [];
          users.push({
            email: signEmail,
            password: signPassword,
            firstname,
            lastname,
          });
          const userExists = users.find((user) => user.email === signEmail);
          if (userExists) {
            toast.error("Bu email artıq mövcuddur!");
            return;
          }

          localStorage.setItem("users", JSON.stringify(users));
          toast.success("Qeydiyyat uğurla tamamlandı!");
          setSignUp(false);
          setSignEmail("");
          setSignPassword("");
          setFirstname("");
          setLastname("");
          setConfirmPassword("");
      }

      if (error) {
        toast.error(error);
      }
    } else {
      toast.error("Xahiş olunur düzgün e-poçt və şifrə daxil edin.");
      return;
    }
  };
  //////////////////////////Login////////////////////////////////////////////////////
  const handleLogin = (e) => {
    e.preventDefault();

    const usersData = JSON.parse(localStorage.getItem("users")) || [];

    const user = usersData.find(
      (item) => item.email === email && item.password === password
    );

    if (user) {
      toast.success("Giriş uğurlu oldu.");
      navigate("/oauth");
      const usersLogin = JSON.parse(localStorage.getItem("usersLogin")) || [];
      usersLogin.push(user);
      localStorage.setItem("usersLogin", JSON.stringify(usersLogin));
      setCurrentUser(user);
      setEmail("");
      setPassword("");
    } else {
      toast.error("Email və ya şifrə səhvdir.");
    }
  };
  ///////////////////////////////////////////////////////////////LogOut/////////////////////////////////////////////////
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("usersLogin");
    navigate("/Login");
    toast.success("Çıxış uğurla tamamlandı!");
  };

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
    signUp,
    setFirstname,
    firstname,
    lastname,
    setLastname,
    signEmail,
    setSignEmail,
    signPassword,
    setSignPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignUp,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    setSignUp,
    currentUser,
    handleLogOut,
  };

  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
