import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../utils/MainContext";
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

  const [formData, setFormData] = useState({
    region: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    telephone: "",
  });
  const [errors, setErrors] = useState({
    region: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    telephone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { region, firstName, lastName, address, apartment, city, telephone } =
      formData;
    let hasError = false;
    const newErrors = {};

    if (!region) {
      newErrors.region = "Select a country/region";
      hasError = true;
    }

    if (!firstName) {
      newErrors.firstName = "Enter a first name";
      hasError = true;
    }
    if (!lastName) {
      newErrors.lastName = "Enter a last name";
      hasError = true;
    }
    if (!address) {
      newErrors.address = "Enter an address";
      hasError = true;
    }
    if (!apartment) {
      newErrors.apartment = "Select a apartment";
      hasError = true;
    }
    if (!city) {
      newErrors.city = "Enter a city";
      hasError = true;
    }
    if (!telephone) {
      newErrors.telephone = "Enter a telephone number";
      hasError = true;
    }
    setErrors(newErrors);

    if (!hasError) {
      // Form data can be submitted here
      console.log("Form data:", formData);
    }
  };

  return (
    // <div className="delivery">
    //   <p>Delivery</p>
    //   <select>
    //     <option value="">Country/Region</option>
    //     {countries.map((item) => (
    //       <option key={item.id} value={item.id}>
    //         {item.label}
    //       </option>
    //     ))}
    //   </select>
    //   <div className="name-surname ">
    //     <input
    //       type="text"
    //       placeholder="First name"
    //       required
    //       pattern="^[a-zA-Z\s]+$"
    //       title="Name should only contain letters and spaces."
    //     />
    //     <input type="text" placeholder="Last name" required />
    //   </div>
    //   <input type="text" placeholder="Address" required />
    //   <input type="text" placeholder="Apartment, suite, etc. (optional)" />
    //   <input type="text" placeholder="City" required />

    //   <form className="num">
    //     <PhoneInput
    //       required
    //       country={"az"}
    //       value={phone}
    //       onChange={(value) => setPhone(value)}
    //       className="phone-input"
    //     />
    //   </form>
    // </div>
    // <div className="delivery">
    //   <p>Delivery</p>
    //   <select
    //     id="country"
    //     onChange={handleChange}
    //     className={errors.country ? "error" : ""}
    //   >
    //     <option value="">Country/Region</option>
    //     {countries.map((item) => (
    //       <option key={item.id} value={item.id}>
    //         {item.label}
    //       </option>
    //     ))}
    //   </select>
    //   <p id="error-region" className="error-message">
    //     {errors.region}
    //   </p>
    //   <div className="name-surname">
    //     <div className="name">
    //       <input
    //         id="firstName"
    //         type="text"
    //         placeholder="First name"
    //         value={formData.firstName}
    //         onChange={handleChange}
    //         className={errors.firstName ? "error" : ""}
    //       />
    //       <p id="error-first-name" className="error-message">
    //         {errors.firstName}
    //       </p>
    //     </div>
    //     <div className="lastname">
    //       <input
    //         id="lastName"
    //         type="text"
    //         placeholder="Last name"
    //         value={formData.lastName}
    //         onChange={handleChange}
    //         className={errors.lastName ? "error" : ""}
    //       />

    //       <p id="error-last-name" className="error-message">
    //         {errors.lastName}
    //       </p>
    //     </div>
    //   </div>

    //   <div className="adress">
    //     <input
    //       id="address"
    //       type="text"
    //       placeholder="Address"
    //       value={formData.address}
    //       onChange={handleChange}
    //       className={errors.address ? "error" : ""}
    //     />
    //     <p id="error-address" className="error-message">
    //       {errors.address}
    //     </p>
    //   </div>

    //   <div className="apartment">
    //     <input
    //       id="apartment"
    //       type="text"
    //       placeholder="Apartment, suite, etc. (optional)"
    //       value={formData.apartment || ""}
    //       onChange={handleChange}
    //     />
    //        <p id="error-city" className="error-message">
    //       {errors.city}
    //     </p>
    //   </div>
    //   <div className="city">
    //     <input
    //       id="city"
    //       type="text"
    //       placeholder="City"
    //       value={formData.city}
    //       onChange={handleChange}
    //       className={errors.city ? "error" : ""}
    //     />
    //     <p id="error-city" className="error-message">
    //       {errors.city}
    //     </p>
    //   </div>

    //   <form className="num">
    //     <PhoneInput
    //       required
    //       country="az"
    //       value={formData.telephone}
    //       onChange={(value) => setFormData({ ...formData, telephone: value })}
    //       className="phone-input"
    //     />
    //   </form>

    //   <button type="submit" onClick={handleSubmit}>
    //     Submit
    //   </button>
    // </div>

    <div className="delivery">
      <p>Delivery</p>
      <select
        id="region"
        onChange={handleChange}
        value={formData.region}
        className={errors.region ? "error" : ""}
      >
        <option value="">Country/Region</option>
        {countries.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <p id="error-region" className="error-message">
        {errors.region}
      </p>

      <div className="name-surname">
        <div className="name">
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className={errors.firstName ? "error" : ""}
          />
          <p id="error-first-name" className="error-message">
            {errors.firstName}
          </p>
        </div>
        <div className="lastname">
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className={errors.lastName ? "error" : ""}
          />
          <p id="error-last-name" className="error-message">
            {errors.lastName}
          </p>
        </div>
      </div>

      <div className="adress">
        <input
          id="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={errors.address ? "error" : ""}
        />
        <p id="error-address" className="error-message">
          {errors.address}
        </p>
      </div>

      <div className="apartment">
        <input
          id="apartment"
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          value={formData.apartment}
          onChange={handleChange}
          className={errors.apartment ? "error" : ""}
        />
        <p id="error-apartment" className="error-message">
          {errors.apartment}
        </p>
      </div>

      <div className="city">
        <input
          id="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? "error" : ""}
        />
        <p id="error-city" className="error-message">
          {errors.city}
        </p>
      </div>

      <div className="telephone">
        <PhoneInput
          required
          country={"az"}
          value={phone}
          onChange={(value) => setPhone(value)}
          className="phone-input"
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Delivery;
