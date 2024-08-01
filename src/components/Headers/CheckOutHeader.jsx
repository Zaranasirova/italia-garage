import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
const CheckoutHeader = () => {
  return (
   <header className="checkout-header">
    <div className="container">
      <div className="row">
      <div className="checkout-logo">
            <Link><Logo className="head-logo"/></Link>
        </div>
        <div className="checkout-main-title">
            <h2>SUMMER CLOSING</h2>
            <p> Shipping resumes on September 2,2024</p>
            <p>Le spedizioni riprendono il 2 Settembre 2024</p>
        </div>
        <div></div>
      </div>
    </div>
   </header>
  );
};

export default CheckoutHeader;