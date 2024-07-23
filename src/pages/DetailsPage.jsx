import React from "react";
import TopHeader from "../components/TopHeader";
import BottomHeader from "../components/BottomHeader";
import Footer from "../components/Footer";
import ProductDetails from "./Section/ProductDetails";

const DetailsPage = () => {
  return (
    <>
      <TopHeader />
      <main>
        <ProductDetails />
      </main>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default DetailsPage;
