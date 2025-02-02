import React from "react";
import { AuthContext } from "../context/AuthContext";
import feathersClient from "../services/feathersClient";

export const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onLogin = async (email, password) => {
    const response = await feathersClient.authenticate({
      strategy: "local",
      email,
      password,
    });
    console.log("masuk", response);
    dispatch({ type: "LOGIN", payload: response });
  };

  const onLogout = async () => {
    await feathersClient.logout();
    dispatch({ type: "LOGOUT" });
  };

  const checkAuth = async () => {
    try {
      // Cek apakah token masih valid
      await feathersClient.reAuthenticate();
    } catch (error) {
      console.error("Token expired or invalid:", error);
      onLogout();
    }
  };

  return {
    session: state.user,
    token: state.token,
    onLogin,
    onLogout,
    checkAuth,
  };
};
