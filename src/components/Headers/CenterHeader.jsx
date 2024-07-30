import React from "react";
import { Link } from "react-router-dom";
const CenterHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
            <Link className="products-item">SHOP ALL</Link>
            <Link className="products-item">APPAREL</Link>
            <Link className="products-item">ACCESORIES</Link>
            <Link className="products-item">PRINT</Link>
            <Link className="products-item">FREE BITES</Link>
        </div>
      </div>
    </header>
  );
};

export default CenterHeader;
