import React from "react";

//Headers Import//
import TopHeader from "../components/Headers/TopHeader";
import BottomHeader from "../components/Headers/BottomHeader";

//Footer Import//
import Footer from "../components/Footer/Footer";
//section import//
import MainSection from "./Section/MainSection";

const HomePage = () => {
  return (
    <>
      <TopHeader />
      <main>
        <MainSection />
      </main>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default HomePage;
