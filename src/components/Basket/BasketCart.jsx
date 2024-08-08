import React from "react";
//MAINCONTEXT IMPORT//
import { MainContext } from "../../utils/MainContext";
//HOOKS IMPORT//
import { useContext } from "react";
//COMPONENTS IMPORT//
import Cart from "../Cart";
//REACT ROUTER DOM IMPORT//
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BasketCart = () => {
  //MAINCONTEXT//
  const { cartIsOpen, setCartIsOpen, cartList, totalPrice } =
    useContext(MainContext);
//Redirect to Checkout Page on Button Click//
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/CheckoutPage");
  };

  return (
    <div className={`basket-cart column ${cartIsOpen ? "open" : ""}`}>
      <div className="basket-cart-head">
        <h3 className="cart-head-name">Cart</h3>
        <h3 className=" cart-head-name close" onClick={() => setCartIsOpen(false)}>
          Close
        </h3>
      </div>
      <div className="cart-list">
        <div className="product-list">
          {cartList.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        {cartList.length === 0 && (
          <div className="empty">
            <span>YOUR CART IS EMPTY</span>
          </div>
        )}
      </div>
      <div className="end-of-cart">
        <div className="total column">
          <div className="sub-total">
            <p>SubTotal</p>
            <p>€{totalPrice}</p>
          </div>
          <button className="add" onClick={handleButtonClick}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
