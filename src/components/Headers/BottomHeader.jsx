import React, { useState } from "react";
//HOOKS IMPORT//
import { useContext } from "react";
//MAINCONTEXT IMPORT//
import { MainContext } from "../../utils/MainContext";

//COMPONENT IMPORT//
import NavBar from "../NavBar";



const BottomHeader = () => {
  //Opening and closing the menu in responsiveness//
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //Responsiveness menu opening and closing while handling overflow//
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };
  //MAINCONTEXT//
  const { path } = useContext(MainContext);
  
  return (
    <header className={`bottom-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <nav className="navBar">
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className={`navBar-title ${path === "/" ? "active" : ""}`}>Menu</span>
            <NavBar clas={`navbar-menu column ${isMenuOpen ? "open" : ""}`}/>
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
