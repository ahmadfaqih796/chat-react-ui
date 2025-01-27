import React from "react";
import { useAlert } from "../../hooks/useAlert";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../logo.svg";

function LoginApp() {
  const { onLogin } = useAuth();
  const { onAlert } = useAlert();

  const logIn = () => {
    const userData = {
      user: "John Doe",
      token: "12345abcde",
    };
    try {
      onLogin(userData);
      onAlert("success", "Login successful!");
    } catch (error) {
      onAlert("error", "Login failed!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={logIn}>Log in</button>
      </header>
    </div>
  );
}

export default LoginApp;
