import React, { useContext } from 'react';
 import Tee from "../assets/image/tee_fronte_pastel_green.webp";
import { MainContext } from '../utils/MainContext';

const Cart = ({ data }) => {
  const {removeProductCart}=useContext(MainContext);
  return (
<div className="about-product">
<div className="product-box">
<div className="productImg">
  <div className='image'><img src={`${process.env.REACT_APP_BASE_URL}/${data.productImage}`} alt="" /></div>
  
</div>
<div className="product-info">
  <div className="upperSide">
    <div className="productSize">
      <p>{data.name}</p>
      <span>SIZE:XXS</span>
    </div>
    <div className="removeProduct" onClick={()=>removeProductCart(data.id)}>
      <span>REMOVE</span>
    </div>
  </div>
  <div className="downSide">
    <ul className='numberlist'>
      <li><button>-</button></li>
      <li className='num'>{data.quantity}</li>
      <li><button>+</button></li>
    </ul>
  <span>€{data.price}</span>
  </div>
</div>
</div>
</div>
  )
}

export default Cart