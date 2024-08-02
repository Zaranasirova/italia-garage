import React from "react";
import PayPal from "../../assets/image/payPal .png";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <section className="checkout-section">
      <div className="checkout-container">
        <div className="left">
          <div className="container-left">
            <div className="row">
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
                <div className="text-login">
                  <span>Contact</span>
                  <Link to={"/login"}>
                    <span className="login">Log in</span>
                  </Link>
                </div>
                <form>
                  <input type="email" placeholder="Email" required />
                  <label className="custom-checkbox">
                    <input type="checkbox" name="updates" />
                    <span>Update me on offers and news</span>
                  </label>
                </form>
              </div>
              
            </div>
          </div>
        </div>
        <div className="right">
          <div className="container-right">
            salam
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
