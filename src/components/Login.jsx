import React, { useState } from "react";
import styled from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [signEmail, setSignEmail] = useState("");
  const [signPassword, setSignPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) && password.length > 0) {
      let error = "";

      switch (true) {
        case password.length <= 7:
          error = "Şifrə 7 simvoldan çox olmalıdır.";
          break;
        case password.length >= 15:
          error = "Şifrə 15 simvoldan az olmalıdır.";
          break;
        case !/[!@#$%^&*]/.test(password):
          error = "Şifrə xüsusi simvol (!@#$%^&*) ehtiva etməlidir.";
          break;
        case !/[A-Z]/.test(password):
          error = "Şifrə ən azı bir böyük hərf ehtiva etməlidir.";
          break;
        default:
          toast.success("Giriş uğurla tamamlandı!");
          return;
      }

      if (error) {
        toast.error(error);
      }
    } else {
      toast.error("Xahiş olunur düzgün e-poçt və şifrə daxil edin.");
    }
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (signPassword !== confirmPassword) {
      toast.error("Şifrə uyğun deyil!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === signEmail);
    if (userExists) {
      toast.error("Bu email artıq mövcuddur!");
      return;
    }

    users.push({
      email: signEmail,
      password: signPassword,
      firstname,
      lastname,
    });
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Qeydiyyat uğurla tamamlandı!");
    setSignUp(false);
    setSignEmail("");
    setSignPassword("");
    setFirstname("");
    setLastname("");
    setConfirmPassword("");
  };

  return (
    <StyledWrapper>
      <div className="login">
        {signUp ? (
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
                Signin
              </a>{" "}
            </p>
          </form>
        ) : (
          <form className="form">
            <div className="flex-column">
              <label>Email</label>
            </div>
            <div className="inputForm">
              <svg
                height="20"
                viewBox="0 0 32 32"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                </g>
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex-column">
              <label>Password </label>
            </div>
            <div className="inputForm">
              <svg
                height="20"
                viewBox="-64 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
              </svg>
              <input
                type="password"
                className="input"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <svg
                viewBox="0 0 576 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </div>
            <div className="flex-row">
              <div>
                <input type="checkbox" />
                <label>Remember me </label>
              </div>
              <span className="span">Forgot password?</span>
            </div>
            <button className="button-submit" onClick={handleSubmit}>
              Sign In
            </button>
            <p className="p">
              Don&apos;t have an account?{" "}
              <span className="span" onClick={() => setSignUp(true)}>
                Sign Up
              </span>
            </p>
            <p className="p line">Or With</p>

            <div className="flex-row">
              <button className="btn google">
                <svg
                  version="1.1"
                  width="20"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  space="preserve"
                >
                  <path
                    style={{ fill: "#FBBB00" }}
                    d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\n\tc0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\n\tC103.821,274.792,107.225,292.797,113.47,309.408z"
                  />
                  <path
                    style={{ fill: "#518EF8" }}
                    d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\n\tc-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\n\tc29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                  />
                  <path
                    style={{ fill: "#28B446" }}
                    d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\n\tc-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\n\tc28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                  />
                  <path
                    style={{ fill: "#F14336" }}
                    d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\n\tc-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\n\tC318.115,0,375.068,22.126,419.404,58.936z"
                  />
                </svg>
                Google
              </button>
              <button className="btn apple">
                <svg
                  version="1.1"
                  height="20"
                  width="20"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 22.773 22.773"
                  style={{ enableBackground: "new 0 0 22.773 22.773" }}
                  space="preserve"
                >
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z" />{" "}
                      <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z" />{" "}
                    </g>
                  </g>
                </svg>
                Apple
              </button>
            </div>
          </form>
        )}
        <ToastContainer autoClose={2000} />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #242424;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #ffffff;
    padding: 30px;
    width: 450px;
    border-radius: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .form button {
    align-self: flex-end;
  }

  .flex-column > label {
    color: #151717;
    font-weight: 600;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 0.2s ease-in-out;
  }

  .input {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    width: 85%;
    height: 100%;
  }

  .input:focus {
    outline: none;
  }

  .inputForm:focus-within {
    border: 1.5px solid #2d79f3;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
  }

  .flex-row > div > label {
    font-size: 14px;
    color: black;
    font-weight: 400;
  }

  .span {
    font-size: 14px;
    margin-left: 5px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
  }

  .button-submit {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    height: 50px;
    width: 100%;
    cursor: pointer;
  }

  .button-submit:hover {
    background-color: #252727;
  }

  .p {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .btn {
    margin-top: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 10px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .btn:hover {
    border: 1px solid #2d79f3;
  }

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

export default Login;
