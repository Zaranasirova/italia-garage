import React, { createContext } from "react";
import  { useState } from 'react';
export const MainContext = createContext();


export const GlobalContext = ({ children }) => {
  const [sendIsOpen, setSendIsOpen] = useState(false);
  const globalData = {sendIsOpen,setSendIsOpen};
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};

export default GlobalContext;
