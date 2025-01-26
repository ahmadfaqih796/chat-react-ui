import React from "react";
import { AlertContext } from "../../context/AlertContext";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../logo.svg";

function LoginApp() {
  const { state, onLogin } = useAuth();
  const { successMessage, errorMessage } = React.useContext(AlertContext);

  const logIn = () => {
    const userData = {
      user: "John Doe",
      token: "12345abcde",
    };
    try {
      onLogin(userData);
      successMessage("Login successful!");
    } catch (error) {
      errorMessage("Gagal Login");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {state.loggedIn ? (
          <div>
            <p>Logged in as: {state.user}</p>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
        <button onClick={logIn}>Log in</button>
      </header>
    </div>
  );
}

export default LoginApp;
