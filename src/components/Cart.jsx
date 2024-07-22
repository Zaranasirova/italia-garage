import React from 'react';
 import Tee from "../assets/image/tee_fronte_pastel_green.webp";

const Cart = () => {
  return (
<div className="about-product">
<div className="productInfo">
<div className="productImg">
  <img src={Tee} alt="" />
</div>
<div className="product-info">
  <div className="upperSide">
    <div className="productSize">
      <p>COLOR LOGO THE PASTEL GREY</p>
      <span>SIZE:XXS</span>
    </div>
    <div className="removeProduct">
      <span>REMOVE</span>
    </div>
  </div>
  <div className="downSide">
    <ul className='numberlist'>
      <li><button>-</button></li>
      <li className='num'>1</li>
      <li><button>+</button></li>
    </ul>
  <span>42.00$</span>
  </div>
</div>
</div>
</div>
  )
}

export default Cart