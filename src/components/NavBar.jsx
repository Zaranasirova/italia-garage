import React from 'react';
//REACT ROUTER DOM//
import { Link } from 'react-router-dom';
//HOOKS//
import { useContext } from 'react';
//MAINCONTEXT//
import { MainContext } from '../utils/MainContext';
//COMPONENTS
import DropDownList from '../components/DropDownList';
//DB//
import {
    customsDropdown,
    garageDropdown,
    hubDropdown,
  } from "../DB/Dropdown";
////i18n//////////
import { useTranslation } from "react-i18next";


const NavBar = ({clas}) => {
  //Maincontext//
    const { path } = useContext(MainContext);
    ///translation////////
    const { t } = useTranslation();
  return (
    <ul className={clas}>
    <li  className={`${path === "/" ? "active" : ""}`}>
      {" "}
      <DropDownList
        triggerText={t("bottomHeader.CUSTOMS")}
        items={customsDropdown}
        ClassList="customsDropdown-menu"
        ClassLink="drop-link"
      />
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      {" "}
      <DropDownList
        triggerText={t("bottomHeader.OUR GARAGE")}
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
        {t("bottomHeader.MARKET PLACE")}
      </Link>
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      <DropDownList
        triggerText={t("bottomHeader.HUB")}
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
        {t("bottomHeader.SHOP")}
      </Link>
    </li>
    <li className={`${path === "/" ? "active" : ""}`}>
      <Link
        to={"/"}
        className={`title ${path === "/" ? "active" : ""}`}
      >
        {t("bottomHeader.STUDIO")}
      </Link>
    </li>
  </ul>
  )
}

export default NavBar