import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <header className="checkout-header">
      <div className="container">
        <div className="check-head">
          <div className="check-logo">
            <Link>
              {" "}
              <Logo className="logo"/>
            </Link>
          </div>
          <div className="check-title column">
            <h4>Summer Closing</h4>
            <p>Shipping resumes on September 2,2024</p>
            <p>Le spedizioni riprendono il 2 Settembre 2024</p>
          </div>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
