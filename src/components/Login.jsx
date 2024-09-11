import React, { useContext, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../utils/MainContext";
import SignUpForm from "../components/SignUpForm";
import LogInForm from "../components/LogInForm";

const Login = () => {
  const { signUp } = useContext(MainContext);
  return (
    <div
      className="login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#242424",
      }}
    >
      {signUp ? <SignUpForm /> : <LogInForm />}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Login;
