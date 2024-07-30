import React from "react";

//section import//
import AllProducts from "./Section/AllProducts";
import Hero from "./Section/Hero";

//Headers import///
import CenterHeader from "../components/Headers/CenterHeader";
import TopHeader from "../components/Headers/TopHeader";
import BottomHeader from "../components/Headers/BottomHeader";

//Footer Import//
import Footer from "../components/Footer/Footer";

const ShopPage = () => {
  return (
    <>
      <TopHeader />
      <main>
        <Hero />
        <CenterHeader />
        <AllProducts />
      </main>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default ShopPage;
