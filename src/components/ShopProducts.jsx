import React, { useState } from "react";
import Tee from "../assets/image/tee_fronte_pastel_green.webp";
import { Link } from "react-router-dom";
import { ReactComponent as Send } from "../assets/icons/send.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsappIcon.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const ShopProducts = () => {
  const [sendIsOpen, setSendIsOpen] = useState(false);
  return (
    <div className="boxs">
      <div className="boxImage">
        <Link to={"/Product-Details"}>
          {" "}
          <img src={Tee} alt="" />
        </Link>

        <Send
          className="socialicon"
          onClick={() => setSendIsOpen(!sendIsOpen)}
        />
        {sendIsOpen && (
          <div className="iconList">
            <Link
              className="icon"
              to={
                "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fgarage-italia.com%252Fen%252Fshop%252Fcollections%252Fhome%26t%3Dhttps%253A%252F%252Fgarage-italia.com%252Fen%252Fshop%252Fcollections%252Fhome&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US"
              }
              target="_blank"
            >
              <Facebook />
            </Link>
            <Link
              className="icon"
              to={
                "https://x.com/intent/post?source=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome&text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome"
              }
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              className="icon"
              to={
                "whatsapp://send?text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome"
              }
              target="_blank"
            >
              <Whatsapp />
            </Link>
            <Close
              className="icon close"
              onClick={() => setSendIsOpen(!sendIsOpen)}
            />
          </div>
        )}
      </div>
      <Link to={"/Product-Details"} className="boxInfoLink">
        <div className="boxInfo">
          <p className="boxTitle">COLOR LOGO TEE PASTEL GREY</p>
          <span className="boxPrice">42,00 $</span>
        </div>
      </Link>
    </div>
  );
};

export default ShopProducts;
