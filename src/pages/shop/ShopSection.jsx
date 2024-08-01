import React from "react";
import LeftShop from "./LeftShop";
import RightShop from "./RightShop";

const ShopSection = () => {
  return (
    <section className="shop-section">
      <div className="shop-container">
        <div className="left">
          <LeftShop />
        </div>
        <span className="liner"></span>
        <div className="right">
          <RightShop />
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
