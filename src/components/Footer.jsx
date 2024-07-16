import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="socialList">
            <div className="listItem">
              <Link className="socialListLink">Facebook Customs</Link>
              <ul>
                <li>Customs</li>
                <li>
                  <Link className="pageLinks">Our Projects</Link>
                </li>
                <li>
                  <Link className="pageLinks">Our Services</Link>
                </li>
              </ul>
            </div>
            <div className="listItem">
              <Link className="socialListLink">Instagram Customs</Link>
              <ul>
                <li>Hub</li>
                <li>
                  <Link className="pageLinks">HomePage</Link>
                </li>
                <li>
                  <Link className="pageLinks">Archive</Link>
                </li>
              </ul>
            </div>
            <div className="listItem">
              <Link className="socialListLink">Twitter</Link>
              <ul>
                <li>Shop</li>
                <li>
                  <Link className="pageLinks">Shop All</Link>
                </li>
                <li>
                  <Link className="pageLinks">Sales</Link>
                </li>
              </ul>
            </div>
            <div className="listItem">
              <Link className="socialListLink">Linkedin</Link>
              <Link className="socialListLink">Studio</Link>
            </div>
            <div className="listItem">
              <Link className="socialListLink">Spotify</Link>
              <ul>
                <li>Legal</li>
                <li>
                  <Link className="pageLinks">Privacy Policy</Link>
                </li>
                <li>
                  <Link className="pageLinks">Terms & Conditions</Link>
                </li>
                <li>
                  <Link className="pageLinks">Return Policy</Link>
                </li>
              </ul>
            </div>
            <div className="listItem">
              <Link className="socialListLink">Instagram Studio</Link>
            </div>
          </div>
          <div className="copywrite">
            <small>
              GARAGE ITALIA CUSTOMS S.R.L. VIA GALLARATE, 147 - 20151 MILANO,
              ITALIA N. REG. IMPR. MI P.IVA C.F. IT-09555260968
            </small>
         <Logo className="footerLogo"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
