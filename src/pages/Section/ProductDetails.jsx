import React from "react";
import { ReactComponent as Send } from "../../assets/icons/send.svg";
import Tee from "../../assets/image/tee_fronte_pastel_green.webp";
import TeeRetro from "../../assets/image/tee_retro_pastel_grey.webp";
import GarageItalia from "../../assets/image/GarageItalia_Web_28_a969d81a-3229-4e03-a7b8-01ac4446196c.webp";
import Box from "../../components/Box";
import Social from "../../components/Social";




const ProductDetails = () => {
  return (
    <section className="productSection">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <h2 className="productName">COLOR LOGO TEE  PASTEL GREY</h2>
            <div className="aboutProduct">
              <span>Oversize fit</span>
              <ul>
                <li>Pastel Grey color</li>
                <li>Heavyweight 100% cotton jersey 235g/m²</li>
                <li>Crew-neck</li>
                <li>Short Sleeves</li>
                <li>Embroidered logo</li>
                <li>Unisex</li>
                <li>Made in Italy</li>
              </ul>
            </div>
            <div className="productSize">
              <span>SIZE GUIDE</span>
              <div className="size">
                <ul className="sizeList">
                  <li className="active">XXS</li>
                  <li>XS</li>
                  <li>S</li>
                  <li className="deactive">M</li>
                  <li className="deactive">L</li>
                  <li className="deactive">XL</li>
                </ul>
                <div className="sendIcon">
                  <Send className="socialIcon"/>
                  <Social/>
                </div>
            
              </div>
            </div>
            <div className="addTooBasket">
              <button>ADD TOO CART</button>
              <span className="price">$42.00</span>
            </div>
          </div>
          <div className="rightSide">
            <div className="productsPhotos">
              <img src={Tee} alt="" />
             <img src={TeeRetro} alt="" />
             <img src={GarageItalia} alt="" />
            </div>
          </div>
        </div>
      </div>
     <Box/>
    </section>
  );
};

export default ProductDetails;
