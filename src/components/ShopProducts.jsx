import React from "react";
import Tee from "../assets/image/tee_fronte_pastel_green.webp";
import { Link } from "react-router-dom";


const ShopProducts = () => {
  return (
    <div className="boxs">
      <Link to={"/Product-Details"} className="boxImage">
        <img src={Tee} alt=""/>
      </Link>
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
