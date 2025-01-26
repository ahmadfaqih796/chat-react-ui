import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AlertContext } from "../../context/AlertContext";

const DashboardApp = () => {
  const { dispatch } = React.useContext(AuthContext);
  const { successMessage, errorMessage } = React.useContext(AlertContext);
  const navigate = useNavigate();

  const logOut = () => {
    try {
      dispatch({ type: "LOGOUT" });
      successMessage("Logout berhasil");
      navigate("/authentication/login");
    } catch (error) {
      errorMessage("Gagal Logout");
    }
  };
  return (
    <div>
      DashboardApp
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export default DashboardApp;
