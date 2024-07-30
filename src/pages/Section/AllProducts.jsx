import React from "react";
import { Link } from "react-router-dom";
import ShopProducts from "../../components/ShopProducts";
const AllProducts = () => {
  return (
    <section className="all-products">
      <div className="container">
        <div className="row">
          <div className="products-box">
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          <ShopProducts/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
