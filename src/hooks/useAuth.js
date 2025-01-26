import React from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onLogin = (payload) => {
    dispatch({ type: "LOGIN", payload: payload });
  };

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return { session: state.user, onLogin, onLogout };
};
