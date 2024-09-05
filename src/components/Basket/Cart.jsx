import React, { useContext } from "react";
//MAINCONTEXT IMPORT//
import { MainContext } from "../../utils/MainContext";
import { quantityTypes } from "../../DB/types";

const Cart = ({ data }) => {
  //MAINCONTEXT//
  const { removeProductCart, quantityControl } = useContext(MainContext);

  return (
    <div className="about-product">
      <div className="product-box row">
        <div className="productImg">
          <div className="image">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${data.productImage}`}
              alt=""
            />
          </div>
        </div>
        <div className="product-info column">
          <div className="upperSide row">
            <div className="productSize column">
              <p>{data.name}</p>
              <span>SIZE:XXS</span>
            </div>
            <div
              className="removeProduct"
              onClick={() => removeProductCart(data.id)}
            >
              <span>REMOVE</span>
            </div>
          </div>
          <div className="downSide row">
            <ul className="numberlist row">
              <li>
                <button
                  onClick={() =>
                    quantityControl(data.id, quantityTypes.decrement)
                  }
                >
                  -
                </button>
              </li>
              <li className="num">{data.quantity}</li>
              <li>
                <button
                  onClick={() =>
                    quantityControl(data.id, quantityTypes.increment)
                  }
                >
                  +
                </button>
              </li>
            </ul>
            <span>€{data.price * data.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
