import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import TopHeader from "./components/TopHeader";

//Page
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";



const App = () => {
  return (
    <>
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/Product-Details" element={<ProductDetails/>}/>
      </Routes>
      <BottomHeader/>
      <Footer/>
     
    </>
  );
};

export default App;
