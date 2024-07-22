import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const BottomHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bottomHeader">
      <div className="menu">
        <Link className="menu-click" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          MENU
        </Link>
       
      </div>
      <div className="container">
        
        <nav className="navBar">
          <div className="customs">
            <Link to={"/"} className="title">
              Customs
            </Link>
            <ul className="customs-dropdown">
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  SERVICES
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  PROJECTS
                </Link>
              </li>
            </ul>
          </div>
          <div className="ourGarage">
            <Link to={"/"} className="title">
              our Garage
            </Link>
            <ul className="garage-dropdown">
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  500 Spiaggina
                </Link>
              </li>
              <li>
                <Link to={"/"} className="dropdown-links">
                  Vespa 50 Special-e
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Spider Duetto Hybrid
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Datsun 240z
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Panda 4x4
                </Link>
              </li>
            </ul>
          </div>
          <div className="marketPlace">
            <Link to={"/"} className="title">
              market Place
            </Link>
          </div>
          <div className="hub">
            <Link to={"/"} className="title">
              Hub
            </Link>
            <ul className="hub-dropdown">
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Hub Home
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Garage Culture
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Garage Customs
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"/"} className="dropdown-links">
                  Studio Projects
                </Link>
              </li>
            </ul>
          </div>
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
    </header>
  );
};

export default BottomHeader;
