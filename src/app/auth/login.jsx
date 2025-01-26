import React from "react";
import logo from "../../logo.svg";
import { AuthContext } from "../../context/AuthContext";
import { AlertContext } from "../../context/AlertContext";
import { useNavigate } from "react-router-dom";

function LoginApp() {
  const { state, dispatch } = React.useContext(AuthContext);
  const { successMessage, errorMessage } = React.useContext(AlertContext);
  const navigate = useNavigate();

  const logOut = () => dispatch({ type: "LOGOUT" });

  const logIn = () => {
    const userData = {
      user: "John Doe",
      token: "12345abcde",
    };
    try {
      successMessage("Login successful!");
      dispatch({ type: "LOGIN", payload: userData });
      navigate("/dashboard");
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
            <button onClick={logOut}>Log out</button>
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
