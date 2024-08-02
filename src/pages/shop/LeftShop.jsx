import React from "react";
// import paypal from "../../assets/images/paypalbuy.svg";
// import googlepay from "../../assets/images/light_gpay.svg";
import Delivery from "./Delivery";

import { NavLink } from "react-router-dom";
import PayPal from "../../assets/image/payPal .png";
import { useState } from "react";

const LeftShop = () => {
 
  return (
    <div className="left-shop">
      <div className="container">
        <div className="payment-way">
          <p className="title">Express checkout</p>
          <div className="button-container">
            <button className="paypal">
              <img src={PayPal} alt="paypal" />
            </button>
          </div>

          <div className="or-way row">
            <span></span>
            <p>or</p>
            <span></span>
          </div>
        </div>
        <div className="contact-part">
          <div className="text-login row">
            <span>Contact</span>
            <NavLink to={'/login'}><span className="login">Log in</span></NavLink>
          </div>
          <form>
            <input type="email" placeholder="Email" required />
            <label className="custom-checkbox">
              <input type="checkbox" name="updates" />
              <span>Update me on offers and news</span>
            </label>
          </form>
        </div>
        <div className="delivery-part">
          <Delivery />
          <span className="shipping">Shipping method</span>
          <div className="metod">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>
        <button className="review-button" >
         Review order
          </button>
      </div>
    </div>
  );
};

export default LeftShop;
