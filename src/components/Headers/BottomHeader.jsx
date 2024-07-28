import React from "react";
import { Link, useLocation } from "react-router-dom";

import HoverList from "../HoverList";
import {
  customsDropdown,
  garageDropdown,
  hubDropdown,
} from "../../DB/Dropdown";

const BottomHeader = () => {
  return (
    <header className="bottom-header">
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
          <div className="market-place">
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
            <Link to={"/ShopPage"} className="title">
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
    </header>
  );
};

export default BottomHeader;
