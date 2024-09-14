import React, { useContext } from "react";
import { MainContext } from "../../utils/MainContext";

const LoginPage = () => {
    const {currentUser,handleLogOut}=useContext(MainContext);
  return (
    <section className="login-section">
      <div className="container">
      <div className="login-head">
        <div className="login-title">My Account</div>
        <button className="Btn" onClick={handleLogOut}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </div>

          <div className="text">Logout</div>
        </button>
      </div>
      <div className="login-body">
        <div className="login-left-side">
        <h2 className="history-title">Order History</h2>
        <p>You haven't placed any orders yet.</p>
        </div>
        <div className="login-right-side">
          <div className="account">
            <h2>Account details</h2>
            <p className="accaunt-name">{`${currentUser.firstname} ${currentUser.lastname}`}</p>
            <p className="account-adress">
                United States
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LoginPage;
