import React from "react";
//REACT ROUTER DOM IMPORT //
import { Link } from "react-router-dom";
//ICON IMPORT//
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-body column">
          <nav className="social-head">
            <ul className="social-head-list row ">
              <li>
                <Link   to="https://it-it.facebook.com/garageitaliacustoms/" target="_blank" className="social-list-link">
                  Facebook Customs
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://www.instagram.com/garageitalia/" target="_blank" className="social-list-link">
                  Instagram Customs
                </Link>
              </li>
              <li>
                <Link to="https://x.com/_GarageItalia_?s=20&t=icRFLrGIItWH5gEfiD-Bcg" target="_blank" className="social-list-link">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/garageitalia/?originalSubdomain=it" target="_blank" className="social-list-link">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link to={"https://open.spotify.com/user/2g1pc6ecmfsjglf5yzu7237n7"} target="_blank" className="social-list-link">
                  Spotify
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"https://www.instagram.com/garageitaliastudio/"} target="_blank"  className="social-list-link">
                  Instagram Studio
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="social-body">
            <ul className="social-body-list row">
              <li>
                <ul className="column">
                  <li>CUSTOMS</li>
                  <li><Link to={"/"} className="list-link">Our Projects</Link></li>
                  <li><Link to={"/"} className="list-link">Our Services</Link></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <li>Hub</li>
                  <li><Link to={"/"} className="list-link">HomePage</Link></li>
                  <li><Link to={"/"} className="list-link">ARCHIVE</Link></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <li>Shop</li>
                  <li><Link to={"/ShopPage"} className="list-link">Shop All</Link></li>
                  <li><Link to={"/ShopPage"} className="list-link">Sales</Link></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <li><Link to={"/"} className="list-link">Studio</Link></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <li>Legal</li>
                  <li><Link to={"/"} className="list-link">Privacy Policy</Link></li>
                  <li><Link to={"/"} className="list-link">TERMS & CONDITIONS</Link></li>
                  <li><Link to={"/"} className="list-link">Return Policy</Link></li>
                </ul>
              </li>
              <li></li>
            </ul>
          </nav>
          <div className="copy-write row">
            <small>
              GARAGE ITALIA CUSTOMS S.R.L. VIA GALLARATE, 147 - 20151 MILANO,
              ITALIA N. REG. IMPR. MI P.IVA C.F. IT-09555260968
            </small>
            <Link to={"/"}><Logo  className="footer-logo" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
