import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import HoverList from "./HoverList";
import { customsDropdown,garageDropdown,hubDropdown } from "../DB/Dropdown";

const BottomHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <header className="bottomHeader">
      <div className="container">
        <nav className="navBar">
          <HoverList
            triggerText="CUSTOMS"
            items={customsDropdown}
            ClassList="customsDropdown-menu"
            ClassLink="drop-link"
          />
          <HoverList
            triggerText="OUR GARAGE"
            items={garageDropdown}
            ClassList="garageDropdown-menu"
            ClassLink="drop-link"
          />
          <div className="marketPlace">
            <Link to={"/"} className="title">
              market Place
            </Link>
          </div>
          <HoverList
            triggerText="HUB"
            items={hubDropdown}
            ClassList="hubDropdown-menu"
            ClassLink="drop-link"
          />
          <div className="shop">
            <Link to={"/shop"} className="title">
              SHOP
            </Link>
          </div>
          <div className="studio">
            <Link to={"/"} className="title">
              STUDIO
            </Link>
          </div>
        </nav>
      </div>
      <div className="menu">
        <Link className="menu-click" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          MENU
        </Link>
      </div>
    </header>
  );
};

export default BottomHeader;
