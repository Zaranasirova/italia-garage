import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import DropDownList from "../DropDownList";
import { ReactComponent as Dropdown } from "../../assets/icons/dropDown.svg";
import { firstDropdown } from "../../DB/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { MainContext } from "../../utils/MainContext";
import BasketCart from "../Basket/BasketCart";

const TopHeader = () => {
  const { path, title, cartIsOpen, setCartIsOpen } = useContext(MainContext);

  useEffect(() => {
    document.body.style.overflow = cartIsOpen ? "hidden" : "auto";
  }, [cartIsOpen]);
  return (
    // <header className={`top-header ${path === "/" ? "active" : ""}`}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="logo-title">
    //         <Link to="/" className={`title ${path === "/" ? "active" : ""}`}>{title}</Link>
    //       </div>
    //       <div className="logo">
    //         <Link to={"/"}>
    //           <Logo className={`logo-icon ${path === "/" ? "active" : ""}`}/>
    //         </Link>
    //       </div>
    //       <div className={`user-area ${path === "/" ? "active" : ""}`}>
    //         <DropDownList
    //           triggerText="Social"
    //           icon={<Dropdown />}
    //           items={firstDropdown}
    //           ClassList="dropdown-menu"
    //           ClassLink="menu-link"
    //         />
    //         <Link to="/contacts" className={`contact-page-title ${path === "/" ? "active" : ""}`}>CONTACTS</Link>
    //         <span className={`lang ${path === "/" ? "active" : ""}`}>ITA</span>
    //         <FontAwesomeIcon icon={faSearch} className={`search-icon ${path === "/" ? "active" : ""}`} />
    //         <Basket className={`basket-icon ${path === "/" ? "active" : ""}`} onClick={()=> setCartIsOpen(true)} />
    //       </div>
    //     </div>
    //   </div>
    //   {cartIsOpen && <BasketCart />}
    //   {cartIsOpen && (
    //     <div className="overlay" onClick={()=>setCartIsOpen(false)}></div>
    //   )}
    // </header>
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
