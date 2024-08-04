import React, { useContext } from "react";
import { MainContext } from "../../utils/MainContext";

const RightShop = () => {
    
    const { cartList} = useContext(MainContext);
  return (
    <div className="right-part ">
      <div className="container">
        <div className="selected-clothes">
          {cartList.map(item=>(
            <div key={item.id} className="clothes-info row">
            <div className="image">
              <img src={`${process.env.REACT_APP_BASE_URL}/${item.productImage}`} alt={item.name} />
              <div className="quantity">{item.quantity}</div>
            </div>
            <div className="info row">
              <div className="product-info">
                <span className="name">{item.name}</span>
                <span className="size">M</span>
               
              </div>
              <div className="common-price">
                <span className="price">€500</span>
              </div>
            </div>
          </div>
          ))}

        </div>
        <div className="gift-input ">
          <input type="text" placeholder="Discount code or gift card" />
          <button>Apply</button>
        </div>
        <div className="final-info">
          <div className="final-Subprice row">
            <span className="subtotal">Subtotal</span>
            <span>€500</span>
          </div>
          <div className="final-adress row">
            <span>Spedizione</span>
            <span>GRATIS</span>
          </div>
          <div className="final-price row">
            <span className="total">Total</span>
            <div className="total-price row">
              <span className="eur">EUR</span>
              <span>€500</span>
            </div>
          </div>
          <span>Including €309.45 in taxes</span>
        </div>
      </div>
    </div>
  );
};

export default RightShop;
