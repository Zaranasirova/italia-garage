import React from "react";
import Paypal from "../assets/image/payPal .png";

const CheckoutLeft = () => {
  return (
    <div className="checkout-left">
    <div className="container">
    <div className="checkout-head">
        <p>Express checkout</p>
        <img src={Paypal} alt="PayPal-image" />
        <span>or</span>
      </div>
    </div>
    </div>
  );
};

export default CheckoutLeft;
