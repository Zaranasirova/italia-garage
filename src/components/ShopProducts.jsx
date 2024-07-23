import React, { useState } from "react";
import Tee from "../assets/image/tee_fronte_pastel_green.webp";
import { Link } from "react-router-dom";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import { MainContext } from "../utils/MainContext";
import Social from "./Social";
import { useContext } from "react";

const ShopProducts = () => {
  const { sendIsOpen,setSendIsOpen } = useContext(MainContext);
  return (
    <div className="boxs">
      <div className="boxImage">
        <Link to={"/Product-Details"}>
          {" "}
          <img src={Tee} alt="" />
        </Link>
        <div className="socialInfo">
        <Send className="socialicon" onClick={()=>setSendIsOpen(!sendIsOpen)} />
        {sendIsOpen && <Social />}
        </div>
      </div>
      <Link to={"/Product-Details"} className="boxInfoLink">
        <div className="boxInfo">
          <p className="boxTitle">COLOR LOGO TEE PASTEL GREY</p>
          <span className="boxPrice">42,00 $</span>
        </div>
      </Link>
    </div>
  );
};

export default ShopProducts;
