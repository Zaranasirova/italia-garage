import React, { useState } from "react";
// import visa from "../../assets/images/visa.svg";
// import visaSirqule from "../../assets/images/visa-sirqule.svg";
// import discover from "../../assets/images/discover.svg";
// import amex from "../../assets/images/amex.svg";
// import paypal from "../../assets/images/paypal (1).png";
// import buyPay from "../../assets/images/button-pay.svg";
import Delivery from "./Delivery";

const PayDetail = () => {
  const [selectedMethod, setSelectedMethod] = useState("credit");
  const [showDelivery, setShowDelivery] = useState(false);

  // Define ref for card details input fields
  const cardNumberRef = React.useRef(null);
  const expiryDateRef = React.useRef(null);
  const cvvRef = React.useRef(null);
  const cardNameRef = React.useRef(null);

  const handleRadioChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setShowDelivery(event.target.checked);
  };

  const handleButtonClick = () => {
    if (cardNumberRef.current) cardNumberRef.current.value = "";
    if (expiryDateRef.current) expiryDateRef.current.value = "";
    if (cvvRef.current) cvvRef.current.value = "";
    if (cardNameRef.current) cardNameRef.current.value = "";

    window.location.href = "/";
  };

  return (
    <div className="payment-form">
      <h2>Pagamenti</h2>
      <p className="payment-text">Tutte le transazioni sono sicure e criptate</p>

      <label className="payment-method">
        <div className="first-dot row">
          <div className="dot">
            <input
              type="radio"
              className="radio"
              name="payment-method"
              value="credit"
              checked={selectedMethod === "credit"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="text-part row">
            <div className="text">
              <span>Carta di credito</span>
            </div>
            {/* <div className="icon">
              <div className="icons row">
                <img src={visa} alt="Visa" />
                <img src={visaSirqule} alt="MasterCard" />
                <img src={amex} alt="Amex" />
                <img src={discover} alt="Discover" />
              </div>
            </div> */}
          </div>
        </div>
      </label>

      {selectedMethod === "credit" && (
        <div className="payment">
          <div className="card-details">
            <input
              type="text"
              placeholder="Numero carta/ Card number"
              ref={cardNumberRef}
            />
            <div className="expiry-cvv">
              <input
                type="text"
                placeholder="Data di scadenza (MM/YY)"
                ref={expiryDateRef}
              />
              <input
                type="text"
                placeholder="Codice sicurezza (CVV)"
                ref={cvvRef}
              />
            </div>
            <input
              type="text"
              placeholder="Nome sulla carta/ Card name"
              ref={cardNameRef}
            />
            <div className="custom-checkbox">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="updates"
                  onChange={handleCheckboxChange}
                />
                <span>Use shipping address as billing address</span>
              </label>
            </div>
            {!showDelivery && <Delivery />}
          </div>
        </div>
      )}

      <label className="method">
        <div className="second-dot row">
          <div className="dot">
            <input
              type="radio"
              className="radio"
              id="paypal"
              name="payment-method"
              value="paypal"
              checked={selectedMethod === "paypal"}
              onChange={handleRadioChange}
            />
          </div>
          <div className="text-part row">
            <div className="text">
              <span>Paypal</span>
            </div>
            <div className="icon">
              <div className="pay-img">
                {/* <img src={paypal} alt="paypal" /> */}
              </div>
            </div>
          </div>
        </div>
      </label>
      {selectedMethod === "paypal" && (
        <div className="pay-open">
          <p>
            After clicking "Pay with PayPal", you will be redirected to PayPal
            to complete your purchase securely.
          </p>
        </div>
      )}
      <div className="button">
        {selectedMethod === "paypal" && (
          <button className="pay-button" onClick={handleButtonClick}>
            {/* <img src={buyPay} alt="paypal" /> */}
          </button>
        )}
        {selectedMethod === "credit" && (
          <button className="paga-button" onClick={handleButtonClick}>
            Paga
          </button>
        )}
      </div>
    </div>
  );
};

export default PayDetail;
