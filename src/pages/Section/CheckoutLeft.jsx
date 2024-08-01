import React from "react";
import PayPal from "../../assets/image/payPal .png";
import { Link } from "react-router-dom";
const CheckoutLeft = () => {
  return (
    <section className="checkout-left">
      <div className="container">
        <div className="row">
          <div className="pay-pal">
            <p className="paypal-title">Express checkout</p>
            <div className="paypal-img">
            <img src={PayPal} alt="PayPal" />
            </div>
            <div className="or-way">
            <p>or</p>
          </div>
          </div>
          <div className="contact-part">
          <div className="text-login">
            <span>contact </span>
            <Link to={'/login'}><span className="login">Log in</span></Link>
          </div>
          <form>
            <input type="email" placeholder="Email" required />
       
            <label className="custom-checkbox">
              <input type="checkbox" name="updates"/>
              <span>Email me with news and offers</span>
            </label>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutLeft;
