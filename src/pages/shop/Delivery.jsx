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
        <option value="">Country</option>
        {countries.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="name-surname row">
        <input
          type="text"
          placeholder="Nome/Name "
          required
          pattern="^[a-zA-Z\s]+$"
          title="Name should only contain letters and spaces."
        />
        <input type="text" placeholder="Cognome/Surname" required />
      </div>
      <input type="text" placeholder="adress" required />
      <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      <div className="adress-info row">
        <input type="text" placeholder="Citta'/City" required />
      </div>
      <form className="num">
        <PhoneInput
          required
          country={"az"}
          value={phone}
          onChange={(value) => setPhone(value)}
        />
        <label className="custom-checkbox">
          <input type="checkbox" name="updates" />
          <span>Save information for next time</span>
        </label>
      </form>
    </div>
  );
};

export default Delivery;
