import React, { useContext } from "react";
import { ReactComponent as Send } from "../../assets/icons/send.svg";
import Tee from "../../assets/image/tee_fronte_pastel_green.webp";
import TeeRetro from "../../assets/image/tee_retro_pastel_grey.webp";
import GarageItalia from "../../assets/image/GarageItalia_Web_28_a969d81a-3229-4e03-a7b8-01ac4446196c.webp";

import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsappIcon.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../utils/MainContext";
import AddButton from "../../components/AddButton";
const ProductDetails = () => {
  const [sendIsOpen,setSendIsOpen]=useState(false);
  return (
    // <section className="product-section">
    //   <div className="container">
    //     <div className="row">
    //       <div className="left-side">
    //         <h2 className="product-name">COLOR LOGO TEE PASTEL GREY</h2>
    //         <div className="about-product">
    //           <span className="about-head-title">Oversize fit</span>
    //           <ul className="about-product-list">
    //             <li>Pastel Grey color</li>
    //             <li>Heavyweight 100% cotton jersey 235g/m²</li>
    //             <li>Crew-neck</li>
    //             <li>Short Sleeves</li>
    //             <li>Embroidered logo</li>
    //             <li>Unisex</li>
    //             <li>Made in Italy</li>
    //           </ul>
    //         </div>
    //         <div className="product-size">
    //           <span className="size-head-title">SIZE GUIDE</span>
    //           <div className="size">
    //             <ul className="size-list">
    //               <li className="active">XXS</li>
    //               <li>XS</li>
    //               <li>S</li>
    //               <li className="deactive">M</li>
    //               <li className="deactive">L</li>
    //               <li className="deactive">XL</li>
    //             </ul>
    //             <div className="send-icon">
    //               <Send
    //                 className="icon"
    //                 onClick={() => setSendIsOpen(!sendIsOpen)}
    //               />
    //               {sendIsOpen && (
    //                 <div className="iconList">
    //                   <Link
    //                     className="icon"
    //                     to={
    //                       "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fgarage-italia.com%252Fen%252Fshop%252Fcollections%252Fhome%26t%3Dhttps%253A%252F%252Fgarage-italia.com%252Fen%252Fshop%252Fcollections%252Fhome&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US"
    //                     }
    //                     target="_blank"
    //                   >
    //                     <Facebook />
    //                   </Link>
    //                   <Link
    //                     className="icon"
    //                     to={
    //                       "https://x.com/intent/post?source=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome&text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome"
    //                     }
    //                     target="_blank"
    //                   >
    //                     <Twitter />
    //                   </Link>
    //                   <Link
    //                     className="icon"
    //                     to={
    //                       "whatsapp://send?text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome"
    //                     }
    //                     target="_blank"
    //                   >
    //                     <Whatsapp />
    //                   </Link>
    //                   <Close
    //                     className="icon close"
    //                     onClick={() => setSendIsOpen(!sendIsOpen)}
    //                   />
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="add-too-basket">
    //           <button className="add">ADD TOO CART</button>
    //           <span className="price">$42.00</span>
    //         </div>
    //       </div>
    //       <div className="right-side">
    //         <div className="products-photos">
    //           <img src={Tee} alt="" />
    //           <img src={TeeRetro} alt="" />
    //           <img src={GarageItalia} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="checkoutbox">
    //     <div className="nameSizeBox">
    //       <p>COLOR LOGO TEE PASTEL GREY</p>
    //       <span>42.00$</span>
    //     </div>
    //     <div className="addCartBox">
    //       <button className="addToCart">ADD TO CART</button>
    //     </div>
    //   </div>
    // </section>
    <section className="product-details">
      <div className="container">
        <div className="row">
          <div className="left-side">
            <div className="product-name">
              <p className="name">COLOR LOGO TEE PASTEL GREY</p>
            </div>
            <div className="item-details">
              <p className="details">
                Oversize fit Pastel Grey color Heavyweight 100% cotton jersey
                235g/m² Crew-neck Short Sleeves Embroidered logo Unisex Made in
                Italy
              </p>
            </div>
            <div className="product-size">
              <span className="size-head-title">SIZE GUIDE</span>
              <div className="size">
                <ul className="size-list">
                  <li className="active">XXS</li>
                  <li>XS</li>
                  <li>S</li>
                  <li className="deactive">M</li>
                  <li className="deactive">L</li>
                  <li className="deactive">XL</li>
                </ul>
                <div className="send-icon">
                  <Send
                    className="icon social"
                    onClick={() => setSendIsOpen(!sendIsOpen)}
                  />
                  {sendIsOpen && (
                    <div className="icon-list">
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
              </div>
            </div>
            <div className="add-to-basket">
             <AddButton/>
              <div className="list-price">
                <span className="price old">€42.00</span>
                <span className="price original">€37.80</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="products-photo">
              <img src={Tee} alt="" />
              <img src={TeeRetro} alt="" />
              <img src={GarageItalia} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutbox">
         <div className="nameSizeBox">
           <p>COLOR LOGO TEE PASTEL GREY</p>
           <span>42.00$</span>
         </div>
         <div className="addCartBox">
           <button className="addToCart">ADD TO CART</button>
         </div>
       </div>
    </section>
  );
};

export default ProductDetails;
