import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../utils/MainContext";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Delivery = () => {
  const [countries, setCountries] = useState([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const getCounties = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      const modifiedResponse = res.data?.map((item) => ({
        id: item?.cca2,
        label: item?.name?.common,
      }));
      setCountries(modifiedResponse);
    };
    getCounties();
  }, []);

  return (
    <div className="delivery">
      <p>Delivery</p>
      <select>
        <option value="">Country/Region</option>
        {countries.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="name-surname ">
        <input
          type="text"
          placeholder="First name"
          required
          pattern="^[a-zA-Z\s]+$"
          title="Name should only contain letters and spaces."
        />
        <input type="text" placeholder="Last name" required />
      </div>
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      <input type="text" placeholder="City" required />

      <form className="num">
        <PhoneInput
          required
          country={"az"}
          value={phone}
          onChange={(value) => setPhone(value)}
          className="phone-input"
        />
      </form>
    </div>
  );
};

export default Delivery;
