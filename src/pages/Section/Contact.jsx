import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contacts-section">
      <div className="container">
        <div className="row">
          <div className="contacts-content">
            <h3 className="title">Contacts</h3>
            <div className="contact-information">
              <span className="address-title">
                GARAGE ITALIA CUSTOMS S.r.l.
              </span>
              <Link to="tel:+390233431857" className="phoneNumber">
                Phone: <span>+39 02 3343 1857</span>
              </Link>
              <Link
                to="geo:45.498212191589396, -9.128376710096202"
                className="geoAdress"
              >
                Via Gallarate, 147 - 20151 Milano, Italia
              </Link>
              <span className="postal-address">
                N. Reg. Impr. MI P.IVA C.F. IT-09555260968
              </span>
            </div>
          </div>
          <div className="contacts-about">
            <ul className="postalAdressList">
              <li>
                <p>Studio: Creative Agency</p>
                <Link to={"mailTo:studio@garage-italia.com"} className="adressLink">studio@garage-italia.com</Link>
              </li>
              <li>
                <p>Press</p>
                <Link to={"mailTo: pressoffice@garage-italia.com"}  className="adressLink">
                  pressoffice@garage-italia.com
                </Link>
              </li>
              <li style={{ border: 'none' }} >
                <p style={{ border: 'none' }}>Customs: Spiaggina and Customizations</p>
                <Link to={"mailTo:customs@garage-italia.com"} style={{ border: 'none' }} className="adressLink">customs@garage-italia.com</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="write-us">
        <Marquee speed={200}>WRITE US/WRITE US/WRITE US/WRITE US/</Marquee>
      </div>
      
    </section>
  );
};

export default Contact;
