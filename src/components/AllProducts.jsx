import React from "react";
import { Link } from "react-router-dom";
import ShopProducts from "./ShopProducts";
const AllProducts = () => {
  return (
    <section className="allProducts">
      <div className="container">
        <div className="row">
          <div className="productsBox">
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
