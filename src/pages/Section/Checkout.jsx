import React from "react";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight";
const Checkout = () => {
  return (
    <section className="checkout-section">
      <div className="container">
      <div className="checkout-container">
        <div className="left">
          <CheckoutLeft />
        </div>
        <div className="right">
         <CheckoutRight/>
        </div>
      </div>
      </div>
   
    </section>
  );
};

export default Checkout;
