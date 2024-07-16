import React from "react";
import { Link, useLocation } from 'react-router-dom';
const BottomHeader = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header   className={`bottomHeader ${path === '/' ? 'active' : ''}`}>
      <div className="container">
        <div   className={`row ${path === '/' ? 'active' : ''}`}>
          <Link className={`customs ${path === '/' ? 'active' : ''}`}>Customs</Link>
          <Link  className={`ourGarage ${path === '/' ? 'active' : ''}`}>Our Garage</Link>
          <Link  className={`marketPlace ${path === '/' ? 'active' : ''}`}>marketPlace</Link>
          <Link className={`hub ${path === '/' ? 'active' : ''}`}>Hub</Link>
          <Link to={"/shop"} className={`shop ${path === '/' ? 'active' : ''}`}>Shop</Link>
          <Link className={`studio ${path === '/' ? 'active' : ''}`}>Studio</Link>
        </div>
      </div>
    </header>
  );
};

export default BottomHeader;
