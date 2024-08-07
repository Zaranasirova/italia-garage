import React, {  useState } from "react";
//REACT ROUTER DOM//
import { Link } from "react-router-dom";
//SVG İMPORT//
import { ReactComponent as Send } from "../assets/icons/send.svg";
import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as Whatsapp } from "../assets/icons/whatsappIcon.svg";
import { ReactComponent as Close } from "../assets/icons/close.svg";

const ShopProducts = ({ data }) => {
  //Opening and closing on click of the social icon//
  const [sendIsOpen, setSendIsOpen] = useState(false);
  
  return (
    <div className="boxs">
      <div className="box-head">
        <Link to={`/product-details/${data.id}`}>
          {" "}
          <div className="box-image">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${data.productImage}`}
              alt={data.name}
            />
          </div>
        </Link>

        <Send
          className="social-icon"
          onClick={() => setSendIsOpen(!sendIsOpen)}
        />
        {sendIsOpen && (
          <div className="icon-list row">
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
      <div className="box-info">
        <Link to={`/product-details/${data.id}`} className="box-info-link">
          <p className="box-name">{data.name}</p>
          <div className="price-list">
            {data.old_price !== 0 && (
              <span className="old-price">€{data.old_price}</span>
            )}

            <span className="new-price">€{data.price}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopProducts;
