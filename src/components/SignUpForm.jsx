import React, { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../utils/MainContext";

export const Form = () => {
  const {
    setFirstname,
    firstname,
    lastname,
    setLastname,
    signEmail,
    setSignEmail,
    signPassword,
    setSignPassword,
    confirmPassword,
    setConfirmPassword,
    handleSignUp,
    setSignUp,
  } = useContext(MainContext);
  return (
    <StyledWrapper>
      <form className="form-sign-up">
        <p className="title-sign-up">Register </p>
        <p className="message-sign-up">
          Signup now and get full access to our app.{" "}
        </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="text"
              className="input"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            className="input"
            value={signEmail}
            onChange={(e) => setSignEmail(e.target.value)}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={signPassword}
            onChange={(e) => setSignPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit-sign-up " onClick={handleSignUp}>
          Submit
        </button>
        <p className="signin">
          Already have an acount ?{" "}
          <a href="#" onClick={() => setSignUp(false)}>
            Sign In
          </a>{" "}
        </p>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-sign-up {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 450px;
    background-color: #fff;
    padding: 30px;
    border-radius: 20px;
    position: relative;
  }

  .title-sign-up {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title-sign-up::before,
  .title-sign-up::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title-sign-up::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title-sign-up::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message-sign-up,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form-sign-up label {
    position: relative;
  }

  .form-sign-up label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
    margin: 0px;
  }
  .form-sign-up label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form-sign-up label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form-sign-up label .input:focus + span,
  .form-sign-up label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form-sign-up label .input:valid + span {
    color: green;
  }

  .submit-sign-up {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit-sign-up :hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Form;
