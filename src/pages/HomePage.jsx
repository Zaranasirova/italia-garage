import React from "react";
import BottomHeader from "../components/Headers/BottomHeader";
import Footer from "../components/Footer";
import TopHeader from "../components/Headers/TopHeader";
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
