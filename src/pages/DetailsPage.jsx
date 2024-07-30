import React from "react";
//Headers import//
import TopHeader from "../components/Headers/TopHeader";
import BottomHeader from "../components/Headers/BottomHeader";
//Footer import//
import Footer from "../components/Footer/Footer";

//section import//
import ProductDetails from "./Section/ProductDetails";


const DetailsPage = () => {
  return (
    <>
   <TopHeader/>
      <main>
        <ProductDetails />
      </main>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default DetailsPage;
