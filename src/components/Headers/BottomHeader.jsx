import React, { useState } from "react";
//hooks
import { useContext } from "react";
//context
import { MainContext } from "../../utils/MainContext";

//component
import NavBar from "../NavBar";



const BottomHeader = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  const { path } = useContext(MainContext);
  return (
    <header className={`bottom-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <nav className="navBar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`navBar-title ${path === "/" ? "active" : ""}`}>Menu</span>
            <NavBar clas={`navbar-menu ${isMenuOpen ? "open" : ""}`}/>
            <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}></div>
          </div>
         <NavBar clas="navbar-menu"/>
        </nav>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  
  );
};

export default BottomHeader;
