import React from "react";
import { Routes, Route } from "react-router-dom";
//components
import TopHeader from "./components/TopHeader";

//Page
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import GlobalContext from "./utils/MainContext";

const App = () => {
  return (
    <GlobalContext>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Product-Details" element={<DetailsPage/>} />
        <Route path="/CheckOut" element={<CheckOutPage/>}/>
      </Routes>
    </GlobalContext>
  );
};

export default App;
