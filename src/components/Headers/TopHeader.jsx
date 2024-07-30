import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import DropDownList from "../DropDownList";
import { ReactComponent as Dropdown } from "../../assets/icons/dropDown.svg";
import { firstDropdown } from "../../DB/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { MainContext } from "../../utils/MainContext";
const TopHeader = () => {
  const {path, title}=useContext(MainContext);
  return (
    <header className={`top-header ${path === "/" ? "active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="logo-title">
            <Link to="/" className={`title ${path === "/" ? "active" : ""}`}>{title}</Link>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <Logo className={`logo-icon ${path === "/" ? "active" : ""}`}/>
            </Link>
          </div>
          <div className={`user-area ${path === "/" ? "active" : ""}`}>
            <DropDownList
              triggerText="Social"
              icon={<Dropdown />}
              items={firstDropdown}
              ClassList="dropdown-menu"
              ClassLink="menu-link"
            />
            <Link to="/contacts" className={`contact-page-title ${path === "/" ? "active" : ""}`}>CONTACTS</Link>
            <span className={`lang ${path === "/" ? "active" : ""}`}>ITA</span>
            <FontAwesomeIcon icon={faSearch} className={`search-icon ${path === "/" ? "active" : ""}`} />
            <Basket className={`basket-icon ${path === "/" ? "active" : ""}`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
