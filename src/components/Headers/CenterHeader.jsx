import React from "react";
import { Link } from "react-router-dom";
const CenterHeader = () => {
  return (
    <header className="center-header">
      <div className="container">
        <nav className="center-header-wrapper">
        <ul className="row">
          <li><Link className="products-item">SHOP ALL</Link></li>
          <li><Link className="products-item">APPAREL</Link></li>
          <li><Link className="products-item">ACCESORIES</Link></li>
          <li><Link className="products-item">PRINT</Link></li>
          <li><Link className="products-item">FREE BITES</Link></li>
        </ul>
        </nav>
      </div>
    </header>
  );
};

export default CenterHeader;
