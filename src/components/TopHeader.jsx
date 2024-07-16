import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Basket } from "../assets/icons/basket.svg";

const TopHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header className={`topHeader ${path === '/' ? 'active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="logoName">
            <Link to={"/"} className={`title ${path === '/' ? 'active' : ''}`}>Garage Italia</Link>
          </div>
          <div className="logo">
            <Link to={"/"}>
              <Logo className={`logo-icon ${path === '/' ? 'active' : ''}`}/>
            </Link>
          </div>
          <div className={`userArea ${path === '/' ? 'active' : ''}`}>
            <div className="social">
              <span>Social</span>

              {/* <ul className="Dropdown">
                <li>
                  <Link>Instagram Customs</Link>
                </li>
                <li>
                  <Link>Facebook Customs</Link>
                </li>
                <li>
                  <Link>Twitter</Link>
                </li>
                <li>
                  <Link>Linkedin</Link>
                </li>
                <li>
                  <Link>Spotify</Link>
                </li>
                <li>
                  <Link>Instagram Studio</Link>
                </li>
              </ul> */}
            </div>
            <div className="contacts">
              <Link to={"/contacts"} className={`contactTitle ${path === '/' ? 'active' : ''}`}>Contacts</Link>
            </div>
            <div className="lang">
              <span>ITA</span>
            </div>
            <div className="search">
              <Search fill="#000" />
            </div>
            <div className="basketCart">
              <Basket />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
