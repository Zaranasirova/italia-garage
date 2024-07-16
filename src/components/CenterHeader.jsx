import React from "react";
import { Link } from "react-router-dom";
const CenterHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
            <Link className="productsItem">SHOP ALL</Link>
            <Link className="productsItem">APPAREL</Link>
            <Link className="productsItem">ACCESORIES</Link>
            <Link className="productsItem">PRINT</Link>
            <Link className="productsItem">FREE BITES</Link>
        </div>
      </div>
    </header>
  );
};

export default CenterHeader;
