import React from "react";

import BottomHeader from "../components/Headers/BottomHeader";
import Footer from "../components/Footer";
import ProductDetails from "./Section/ProductDetails";
import TopHeader from "../components/Headers/TopHeader";

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
