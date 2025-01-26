import React from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { state, dispatch } = React.useContext(AuthContext);
  //   const navigate = useNavigate();

  const onLogin = (payload) => {
    dispatch({ type: "LOGIN", payload: payload });
    //  navigate("/dashboard");
  };

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
    //  navigate("/authentication/login");
  };

  return { user: state.user, onLogin, onLogout };
};
