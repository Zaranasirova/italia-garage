import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordLenght, setPasswordLenght] = useState("");
  const [passwordCharacter, setPasswordCharacter] = useState("");
  const [passwordUpperCase, setPasswordUpperCase] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    setPasswordLenght("");
    setPasswordCharacter("");
    setPasswordUpperCase("");
    setEmailError("");
    let hasError = false;

    if (password.length < 8 || password.length > 15) {
      setPasswordLenght("Şifrə 8 hərfdən çox, 15 hərfdən az olmalıdır");
      hasError = true;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setPasswordCharacter("Şifrə xüsusi simvol içerməlidir (!@#$%^&*).");
      hasError = true;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordUpperCase("Şifrə ən azı bir böyük hərf içerməlidir.");
      hasError = true;
    }

    if (!email.includes("@")) {
      setEmailError("E-maili duzgun daxil edin.");
      hasError = true;
    }

    if (!hasError) {
      setMessage(false);
    } else {
      setMessage(true);
    }
  };
  return (
    <div>
      {message ? (
        <form>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            style={{ marginLeft: "20px" }}
            onClick={handleLogIn}
          />
          {passwordLenght && <p style={{ color: "red" }}>{passwordLenght}</p>}
          {passwordCharacter && (
            <p style={{ color: "red" }}>{passwordCharacter}</p>
          )}
          {passwordUpperCase && <p style={{ color: "red" }}>{passwordUpperCase}</p>}
        </form>
      ) : (
        <div>
          <p>Siz ugurla giris etdiniz tebrikler</p>
        </div>
      )}
    </div>
  );
};

export default Login;
