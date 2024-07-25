import React, { useState, useEffect } from "react";
import { useContext } from "react";

//React-Router-Dom
import { Link, useLocation } from "react-router-dom";

//import SVG
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Basket } from "../assets/icons/basket.svg";
import { ReactComponent as Dropdown } from "../assets/icons/dropDown.svg";

//import component
import Cart from "./Cart";
import HoverList from "./HoverList";

//Import Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//DB
import { FirstDropdown } from "../DB/Dropdown";
//MainContext
import { MainContext } from "../utils/MainContext";


const TopHeader = () => {
  const { path, title } = useContext(MainContext);
  const [cartisOpen, setCartIsOpen] = useState(false);

  useEffect(() => {
    if (cartisOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [cartisOpen]);
  return (
    <header className={`topHeader ${path === "/" ? "active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="logoName">
            <Link to={"/"} className={`title ${path === "/" ? "active" : ""}`}>
              {title}
            </Link>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <Logo className={`logo-icon ${path === "/" ? "active" : ""}`} />
            </Link>
          </div>
          <div className={`userArea ${path === "/" ? "active" : ""}`}>
            <HoverList
              triggerText="Social"
              icon={<Dropdown />}
              items={FirstDropdown}
              ClassList="dropdown-menu"
              ClassLink="menu-link"
            />
            <div className="contacts">
              <Link
                to={"/contacts"}
                className={`contactTitle ${path === "/" ? "active" : ""}`}
              >
                Contacts
              </Link>
            </div>
            <div className="lang">
              <span>ITA</span>
            </div>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="basketCart">
              <Basket
                className="cart"
                onClick={() => setCartIsOpen(!cartisOpen)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`cartBox ${cartisOpen && "isOpen"}`}>
        <div className="cartHead">
          <h3>Cart</h3>
          <h3
            style={{ cursor: "pointer" }}
            onClick={() => setCartIsOpen(false)}
          >
            Close
          </h3>
        </div>
        <div className="cartList">
          {/* <div className="productList">
         <Cart/>
        </div> */}
          <div className="empty">
            <span>YOUR CART IS EMPTY</span>
          </div>
        </div>

        <div className="endOfCart">
          <div className="total">
            <div className="subTotal">
              <p>SubTotal</p>
              <p>$42.00</p>
            </div>
            <Link to={"/CheckOut"}>
              <button className="check">CHECKOUT</button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`overlay ${cartisOpen && "isOpen"}`}
        onClick={() => setCartIsOpen(false)}
      ></div>
    </header>
  );
};

export default TopHeader;
