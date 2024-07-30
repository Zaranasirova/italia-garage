import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../utils/MainContext';
import DropDownList from '../components/DropDownList';
import {
    customsDropdown,
    garageDropdown,
    hubDropdown,
  } from "../DB/Dropdown";

const NavBar = ({clas}) => {
    const { path } = useContext(MainContext);
  return (
    <ul className={clas}>
    <li  className={`${path === "/" ? "active" : ""}`}>
      {" "}
      <DropDownList
        triggerText="CUSTOMS"
        items={customsDropdown}
        ClassList="customsDropdown-menu"
        ClassLink="drop-link"
      />
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      {" "}
      <DropDownList
        triggerText="OUR GARAGE"
        items={garageDropdown}
        ClassList="garageDropdown-menu"
        ClassLink="drop-link"
      />
    </li>
    <li className={` ${path === "/" ? "active" : ""}`}>
      <Link
        to={"/"}
        className={`title ${path === "/" ? "active" : ""}`}
      >
        MARKET PLACE
      </Link>
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      <DropDownList
        triggerText="HUB"
        items={hubDropdown}
        ClassList="hubDropdown-menu"
        ClassLink="drop-link"
      />
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      <Link
        to={"/ShopPage"}
        className={`title ${path === "/" ? "active" : ""}`}
      >
        SHOP
      </Link>
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      <Link
        to={"/"}
        className={`title ${path === "/" ? "active" : ""}`}
      >
        STUDIO
      </Link>
    </li>
  </ul>
  )
}

export default NavBar