import Cookies from "js-cookie";
import React from "react";
import { AuthContext } from "../context/AuthContext";
import { restApp, socketApp } from "../services/feathersSocket";

export const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthContext);

  const onLogin = async (email, password) => {
    const response = await restApp.authenticate({
      strategy: "local",
      email,
      password,
    });
    const testSocket = await socketApp.authentication.setAccessToken(
      response.accessToken
    );
    await socketApp.reAuthenticate();

    console.log("rrrrrrr", response, testSocket);
    Cookies.set("feathers-jwt", response.accessToken);
    console.log("masuk", response);
    dispatch({ type: "LOGIN", payload: response });
  };

  const onLogout = React.useCallback(async () => {
    await restApp.logout();
    await socketApp.logout();
    Cookies.remove("feathers-jwt");
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  const checkAuth = React.useCallback(async () => {
    if (!Cookies.get("feathers-jwt")) {
      return;
    }
    try {
      const response = await restApp.reAuthenticate();
      await socketApp.authentication.setAccessToken(response.accessToken);
      await socketApp.reAuthenticate();
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
