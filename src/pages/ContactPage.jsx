import React from "react";
import TopHeader from "../components/TopHeader";
import BottomHeader from "../components/BottomHeader";
import Footer from "../components/Footer";
import Contact from "./Section/Contact";
const ContactPage = () => {
  return (
    <>
      <TopHeader />
      <main>
        <Contact />
      </main>
      <BottomHeader />
      <Footer />
    </>
  );
};

export default ContactPage;
