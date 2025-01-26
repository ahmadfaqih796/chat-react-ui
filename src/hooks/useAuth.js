import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = (payload) => {
    dispatch({ type: "LOGIN", payload: payload });
    navigate("/dashboard");
  };

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/authentication/login");
  };

  return { state, onLogin, onLogout };
};
