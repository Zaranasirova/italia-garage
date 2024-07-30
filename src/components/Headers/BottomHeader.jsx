import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import DropDownList from "../DropDownList";
import {
  customsDropdown,
  garageDropdown,
  hubDropdown,
} from "../../DB/Dropdown";
import { MainContext } from "../../utils/MainContext";
const BottomHeader = () => {
  const { path} = useContext(MainContext);
  return (
    <header className="bottom-header">
      <div className="container">
        <nav className="navBar">
          <DropDownList
            triggerText="CUSTOMS"
            items={customsDropdown}
            ClassList="customsDropdown-menu"
            ClassLink="drop-link"
          />
          <DropDownList
            triggerText="OUR GARAGE"
            items={garageDropdown}
            ClassList="garageDropdown-menu"
            ClassLink="drop-link"
          />
          <div className="market-place">
            <Link to={"/"} className={`title ${path === "/" ? "active" : ""}`}>
              market Place
            </Link>
          </div>
          <DropDownList
            triggerText="HUB"
            items={hubDropdown}
            ClassList="hubDropdown-menu"
            ClassLink="drop-link"
          />
          <div className={`shop ${path === "/" ? "active" : ""}`}>
            <Link to={"/ShopPage"}className={`title ${path === "/" ? "active" : ""}`}>
              SHOP
            </Link>
          </div>
          <div className={`studio ${path === "/" ? "active" : ""}`}>
            <Link to={"/"} className={`title ${path === "/" ? "active" : ""}`}>
              STUDIO
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default BottomHeader;
