
import React, { useContext, useState } from "react";
//IMPORT SVG//
import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsappIcon.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
//REACT ROUTER DOM IMPORT//
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//MAINCONTEXT IMPORT//
import { MainContext } from "../../utils/MainContext";
//COMPONENTS IMPORT//
import Loading from "../../components/Loader/Loading";
//HOOKS IMPORT//
import { useEffect } from "react";

const ProductDetails = () => {
  //Main context//
  const { addToCart, product,  loading, getSingleProduct } = useContext(MainContext);
  //Social Icon Opening and Closing//
  const [sendIsOpen, setSendIsOpen] = useState(false);
  //Product id//
  const { productId } = useParams();
//Function to Fetch a Single Product by ID on Page Load//
  useEffect(() => {
    getSingleProduct(productId);
  }, []);
 
  return (
    <section className="product-section">
      {loading && <Loading />}
      <div className="container">
        <div className=" product-details row">
          <div className="left-side column">
            <div className="item-name">
              <p className="name">{product.name}</p>
            </div>
            <div className="item-details">
              <p className="details">{product.details}</p>
            </div>
            <div className="item-size column">
              <span className="size-head-title">SIZE GUIDE</span>
              <div className="size row">
                <ul className="size-list">
                  <li className="active">XXS</li>
                  <li>XS</li>
                  <li>S</li>
                  <li className="deactive">M</li>
                  <li className="deactive">L</li>
                  <li className="deactive">XL</li>
                </ul>
                <div className="send-icon">
                  <Send className="icon social" onClick={() => setSendIsOpen(!sendIsOpen)} />
                  {sendIsOpen && (
                    <div className="icon-list row">
                      <Link className="icon" to="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome" target="_blank">
                        <Facebook />
                      </Link>
                      <Link className="icon" to="https://x.com/intent/post?source=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome&text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome" target="_blank">
                        <Twitter />
                      </Link>
                      <Link className="icon" to="whatsapp://send?text=https%3A%2F%2Fgarage-italia.com%2Fen%2Fshop%2Fcollections%2Fhome" target="_blank">
                        <Whatsapp />
                      </Link>
                      <Close className="icon close" onClick={() => setSendIsOpen(!sendIsOpen)} />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="add-to-basket row">
            <button className="add" onClick={addToCart}>ADD TO CART</button>
              <div className="list-price row">
                {product.old_price !== 0 && <span className="price old">€{product.old_price}</span>}
                <span className="price original">€{product.price}</span>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="products-photo">
              <img src={`${process.env.REACT_APP_BASE_URL}/${product.productImage}`} alt={product.name} />
            </div>
            <div className="products-photo">
              <img src={`${process.env.REACT_APP_BASE_URL}/${product.productImage}`} alt={product.name} />
            </div>
            <div className="products-photo">
              <img src={`${process.env.REACT_APP_BASE_URL}/${product.productImage}`} alt={product.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-box column">
        <div className="name-size-box row">
          <p>{product.name}</p>
          <span>€{product.price}</span>
        </div>
        <div className="add-cart-box">
          <button className="add-to-cart" onClick={addToCart}>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
