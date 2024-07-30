import React, { createContext } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {
  //Naming the logo title according to the locator//
  const location = useLocation();
  const path = location.pathname;
  const formattedPath = path.replace("/", "");
  const title = `Garage Italia ${
    formattedPath ? `/ ${formattedPath}` : ""
  }`.toUpperCase();






  
  const globalData = { path, title,  };
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
