import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import RightShop from "./RightShop";


const TopShop = () => {
  const [isOrderSummaryVisible, setIsOrderSummaryVisible] = useState(false);
  // const {totalPrice}= useContext(MainContext);

  const toggleOrderSummary = () => {
    setIsOrderSummaryVisible((prevState) => !prevState);
  };
  return (
    <div className="top-shop">
      <div className="container">
        <div
          className="show row"
          onClick={toggleOrderSummary}
          style={{ display: isOrderSummaryVisible ? "none" : "flex" }}
        >
          <div className="row">
            <span>Show order summary</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <span>€500</span>
        </div>
        <div
          className="hidden row"
          onClick={toggleOrderSummary}
          style={{ display: isOrderSummaryVisible ? "flex" : "none" }}
        >
          <div className="row">
            <span>Hidden order summary</span>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
          <span>€500</span>
        </div>
        {isOrderSummaryVisible && <RightShop />}
      </div>
    </div>                                                                                     
  );
};

export default TopShop;
