import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//components

//Page
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailsPage from "./pages/DetailsPage";

import GlobalContext from "./utils/MainContext";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import Checkout from "./pages/Section/Checkout";

const App = () => {
  const location = useLocation();
  return (
    <GlobalContext>
      <PageTransition pathname={location.pathname}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/ShopPage" element={<ShopPage />} />
          <Route path="/product-details/:productId" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </PageTransition>
    </GlobalContext>
  );
};

export default App;
