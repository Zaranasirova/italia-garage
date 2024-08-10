import React from "react";
import PayPal from "../../assets/image/payPal .png";
import Delivery from "../shop/Delivery";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  return (
    <section className="checkout-section">
      <div className="container">
        <div className="checkout row">
          <div className="left-side-container">
           <div className="container">
           <div className="left-side">
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
                  <NavLink to={"/login"}>
                    <span className="login">Log in</span>
                  </NavLink>
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
                  Enter your shipping address to view available shipping
                  methods.
                </div>
              </div>
              <button className="review-button">Review order</button>
            </div>
           </div>
          </div>
          <div className="right-side-container">
            <div className="right-side">sa;a,mfgfd</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
