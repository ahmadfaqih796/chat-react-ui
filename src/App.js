import logo from "./logo.svg";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { state, dispatch } = useContext(AuthContext);

  const logOut = () => dispatch({ type: "LOGOUT" });
  const logIn = () => {
    const userData = {
      user: "John Doe",
      token: "12345abcde",
    };
    dispatch({ type: "LOGIN", payload: userData });
  };
  console.log("sasasasas", state);
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

export default App;
