import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <nav className="socialHead">
            <ul>
              <li>
                <Link   to="https://it-it.facebook.com/garageitaliacustoms/" target="_blank" className="socialListLink">
                  Facebook Customs
                </Link>
              </li>
              <li>
                {" "}
                <Link to="https://www.instagram.com/garageitalia/" target="_blank" className="socialListLink">
                  Instagram Customs
                </Link>
              </li>
              <li>
                <Link to="https://x.com/_GarageItalia_?s=20&t=icRFLrGIItWH5gEfiD-Bcg" target="_blank" className="socialListLink">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/garageitalia/?originalSubdomain=it" target="_blank" className="socialListLink">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link to={"https://open.spotify.com/user/2g1pc6ecmfsjglf5yzu7237n7"} target="_blank" className="socialListLink">
                  Spotify
                </Link>
              </li>
              <li>
                {" "}
                <Link to={"https://www.instagram.com/garageitaliastudio/"} target="_blank"  className="socialListLink">
                  Instagram Studio
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="socialList">
            <ul>
              <li>
                <ul>
                  <li>CUSTOMS</li>
                  <li><Link to={"/"} className="listLink">Our Projects</Link></li>
                  <li><Link to={"/"} className="listLink">Our Services</Link></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Hub</li>
                  <li><Link to={"/"} className="listLink">HomePage</Link></li>
                  <li><Link to={"/"} className="listLink">ARCHIVE</Link></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Shop</li>
                  <li><Link to={"/shop"} className="listLink">Shop All</Link></li>
                  <li><Link to={"/shop"} className="listLink">Sales</Link></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li><Link to={"/"} className="listLink">Studio</Link></li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>Legal</li>
                  <li><Link to={"/"} className="listLink">Privacy Policy</Link></li>
                  <li><Link to={"/"} className="listLink">TERMS & CONDITIONS</Link></li>
                  <li><Link to={"/"} className="listLink">Return Policy</Link></li>
                </ul>
              </li>
              <li></li>
            </ul>
          </nav>
          <div className="copywrite">
            <small>
              GARAGE ITALIA CUSTOMS S.R.L. VIA GALLARATE, 147 - 20151 MILANO,
              ITALIA N. REG. IMPR. MI P.IVA C.F. IT-09555260968
            </small>
            <Link to={"/"}><Logo  className="footerLogo" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
