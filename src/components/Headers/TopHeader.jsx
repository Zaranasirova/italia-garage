import React, { useContext, useEffect } from "react";
//REACT ROUTER DOM//
import { Link } from "react-router-dom";
//ICONS//
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { ReactComponent as Dropdown } from "../../assets/icons/dropDown.svg";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
//FONTAWESOME//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//COMPONENTS
import DropDownList from "../DropDownList";
import BasketCart from "../Basket/BasketCart";
//DB//
import { firstDropdown } from "../../DB/Dropdown";
//MAINCONTEXT//
import { MainContext } from "../../utils/MainContext";


const TopHeader = () => {
  //MAINCONTEXT//
  const { path, title, cartIsOpen, setCartIsOpen } = useContext(MainContext);
//When the basket is open and closed, the page’s overflow should be hidden//
  useEffect(() => {
    document.body.style.overflow = cartIsOpen ? "hidden" : "auto";
  }, [cartIsOpen]);

  return (
    <header className="top-header">
      <div className="container">
        <div className="header-wrapper row">
          <div className="header-logo-name">
            <Link to="/" className={`logo ${path === "/" ? "active" : ""}`}>
              {title}
            </Link>
          </div>
          <div className="header-logo">
            <Link to={"/"}>
              <Logo className={`logo ${path === "/" ? "active" : ""}`} />
            </Link>
          </div>
          <nav className="nav-bar row">
            <DropDownList
              triggerText="Social"
              icon={<Dropdown />}
              items={firstDropdown}
              ClassList="dropdown-menu"
              ClassLink="menu-link"
            />
           <div className="contacts">
           <Link
              to="/contacts"
              className={`color-active ${path === "/" ? "active" : ""}`}
            >
              CONTACTS
            </Link>
           </div>
           <div className="ita"> <span className={`color-active ${path === "/" ? "active" : ""}`}>ITA</span></div>
            <div className="search">
            <FontAwesomeIcon
              icon={faSearch}
              className={`color-active ${path === "/" ? "active" : ""}`}
            />
            </div>
          <div className="basket">
          <Basket
              className={`color-active ${path === "/" ? "active" : ""}`}
              onClick={() => setCartIsOpen(true)}
            />
          </div>
          </nav>
        </div>
      </div>
      {cartIsOpen && <BasketCart />}
      {cartIsOpen && (
        <div className="overlay" onClick={() => setCartIsOpen(false)}></div>
      )}
    </header>
  );
};

export default TopHeader;
