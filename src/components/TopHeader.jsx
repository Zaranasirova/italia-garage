import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Basket } from "../assets/icons/basket.svg";

const TopHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  const formattedPath = path.replace("/", "");
  const title = `Garage Italia ${formattedPath ? `/ ${formattedPath}` : ""}`;
  console.log(location.pathname);
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
            <div className="social">
             <p className="socialTitle">Social</p>
             <ul className={`dropdownContent ${path === "/" ? "active" : ""}`}>
                <li className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://it-it.facebook.com/garageitaliacustoms/"
                    className={`socialLink ${path === "/" ? "active" : ""}`} target="_blank"
                  >
                    FACEBOOK CUSTOMS
                  </Link>
                </li>
                <li className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://www.instagram.com/garageitalia/"
                    className={`socialLink ${path === "/" ? "active" : ""}`} target="_blank"
                  >
                    INSTAGRAM CUSTOMS
                  </Link>
                </li>
                <li className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://x.com/_GarageItalia_?s=20&t=icRFLrGIItWH5gEfiD-Bcg"
                    className={`socialLink ${path === "/" ? "active" : ""}`}  target="_blank"
                  >
                    TWITTER
                  </Link>
                </li>
                <li className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://www.linkedin.com/company/garageitalia/?originalSubdomain=it"
                    className={`socialLink ${path === "/" ? "active" : ""}`} target="_blank"
                  >
                    LINKEDIN
                  </Link>
                </li>
                <li className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://open.spotify.com/user/2g1pc6ecmfsjglf5yzu7237n7"
                    className={`socialLink ${path === "/" ? "active" : ""}`}  target="_blank"
                  >
                    SPOTIFY
                  </Link>
                </li>
                <li  className={path === "/" ? "active" : ""}>
                  <Link
                    to="https://www.instagram.com/garageitaliastudio/"
                    className={`socialLink ${path === "/" ? "active" : ""}`}  target="_blank"
                  >
                    INSTAGRAM STUDIO
                  </Link>
                </li>
              </ul>
            </div>
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
