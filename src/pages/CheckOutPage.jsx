import React from "react";
import CheckoutHeader from "../components/Headers/CheckOutHeader";
import CheckoutSection from "./Section/CheckoutSection";

const CheckoutPage = () => {
  return (
    <>
      <CheckoutHeader />
      <main>
        <CheckoutSection />
      </main>
    </>
  );
};

export default CheckoutPage;
