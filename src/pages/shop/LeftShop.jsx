import React from "react";
// import paypal from "../../assets/images/paypalbuy.svg";
// import googlepay from "../../assets/images/light_gpay.svg";
import Delivery from "./Delivery";
import PayDetail from "./PayDetail";
import { NavLink } from "react-router-dom";

const LeftShop = () => {
  return (
    <div className="left-shop">
      <div className="container">
        <div className="payment-way">
          <p className="title">Express checkout</p>
          <div className="button-container">
            <button className="paypal">
              {/* <img src={paypal} alt="paypal" /> */}
            </button>
            <button className="googlepay">
              {/* <img src={googlepay} alt="googlepay" /> */}
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
            <span>contact information</span>
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
        <div className="cart-detail">
          <PayDetail />
        </div>
      </div>
    </div>
  );
};

export default LeftShop;
