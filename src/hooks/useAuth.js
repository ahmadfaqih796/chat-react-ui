import React from "react";
import { AuthContext } from "../context/AuthContext";
import feathersClient from "../services/feathersClient";
import Cookies from "js-cookie";

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

  const onLogout = React.useCallback(async () => {
    await feathersClient.logout();
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  const checkAuth = React.useCallback(async () => {
    try {
      const response = await feathersClient.reAuthenticate();
      dispatch({ type: "LOGIN", payload: response });
    } catch (error) {
      console.error("Token expired or invalid:", error);
      if (Cookies.get("feathers-jwt")) {
        onLogout();
      }
    }
  }, [dispatch, onLogout]);

  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    session: state.user,
    token: state.token,
    onLogin,
    onLogout,
  };
};
