import React from "react";
import { MainContext } from "../../utils/MainContext";
import { useContext } from "react";
import Cart from "../Cart";
import { Link } from "react-router-dom";
import AddButton from "../AddButton";
const BasketCart = () => {
  const { cartIsOpen, setCartIsOpen,cartList } = useContext(MainContext);
console.log("header",cartList);
  return (
    <div className={`basket-cart ${cartIsOpen ? 'open' : ''}`}>
      <div className="basket-cart-head">
        <h3 className="basket-cart-title">Cart</h3>
        <h3 className="basket-cart-close" onClick={() => setCartIsOpen(false)}>
          Close
        </h3>
      </div>
      <div className="cart-list">
        <div className="product-list">
          {
            cartList.map(item=>(
              <Cart/>
            ))
          }
        </div>
        {/* <div className="empty">
          <span>YOUR CART IS EMPTY</span>
        </div> */}
      </div>
      <div className="end-of-cart">
        <div className="total">
          <div className="sub-total">
            <p>SubTotal</p>
            <p>€42.00</p>
          </div>
          <Link  className="check" to={"/CheckOut"}>
          <AddButton/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
