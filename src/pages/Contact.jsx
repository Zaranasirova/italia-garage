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
              <Link to="tel:+390233431857" className="phoneNumber">Phone: <span>+39 02 3343 1857</span></Link>
              <Link to="geo:45.498212191589396, -9.128376710096202" className="geoAdress">
                Via Gallarate, 147 - 20151 Milano, Italia
              </Link>
              <span className="postal-address">
                N. Reg. Impr. MI P.IVA C.F. IT-09555260968
              </span>
            </div>
          </div>
         <div className="contacts-about">
          <div className="postal-adres-name">
            <div className="studio">
              Studio:Creative Agency
            </div>
            <div className="press">
              Press
            </div>
            <div className="customs">
             Customs: Spiaggina and  <br />
              Customizations
            </div>
          </div>
          <div className="postal-addressee">
            <div className="studio-mailAdress">
              <Link to="mailto:studio@garage-italia.com" className="mailAdress">studio@grage-italia.com</Link>
            </div>
            <div className="press-mailAdress">
              <Link to="mailto:pressoffice@garage-italia.com" className="mailAdress">pressoffice@garage-italia.com</Link>
            </div>
            <div className="customs-mailAdress">
              <Link to="mailto:customs@garage-italia.com" className="mailAdress">customs@garage-italia.com</Link>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className="writeUs">
            <Marquee speed={200} >WRITE US/WRITE US/WRITE US/WRITE US/</Marquee>
          </div>
    </section>
  );
};

export default Contact;