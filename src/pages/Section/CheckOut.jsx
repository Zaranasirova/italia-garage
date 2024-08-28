import React from "react";
import PayPal from "../../assets/image/payPal .png";
import Tee from "../../assets/image/tee_fronte_pastel_green.webp";
import Delivery from "../../components/Delivery";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../utils/MainContext";

const CheckOut = () => {
  const { cartList, totalPrice } = useContext(MainContext);
  return (
    <section className="checkout-section">
      <div className="container">
        <div className="checkout row">
          <div className="left-side-container">
            <div className="container">
              <div className="left-side column">
                <div className="payment-way column">
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
               
              </div>
            </div>
          </div>
          <div className="right-side-container">
            <div className="container">
              <div className="right-side column">
                <div className="selected-clothes">
                  {cartList.map((item) => (
                    <div className="shop-boxs row" key={item.id}>
                      <div className="box-image">
                        <img src={`${process.env.REACT_APP_BASE_URL}/${item.productImage}`} alt={item.name} />
                        <span className="quantity">{item.quantity}</span>
                      </div>
                      <div className="info row">
                        <div className="box-about column">
                          <p className="name">{item.name}</p>
                          <span className="size">XXS</span>
                        </div>
                        <div className="box-price">
                          <span>€{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="gift-input ">
                  <input type="text" placeholder="Discount code or gift card" />
                  <button>Apply</button>
                </div>
                <div className="final-info">
                  <div className="final-Subprice row">
                    <span className="subtotal">Subtotal</span>
                    <span>€{totalPrice}</span>
                  </div>
                  <div className="final-adress row">
                    <span>Spedizione</span>
                    <span>GRATIS</span>
                  </div>
                  <div className="final-price row">
                    <span className="total">Total</span>
                    <div className="total-price row">
                      <span className="eur">EUR</span>
                      <span>€{totalPrice}</span>
                    </div>
                  </div>
                  <span>Including €309.45 in taxes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
