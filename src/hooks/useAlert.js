import React from "react";
import { AlertContext } from "../context/AlertContext";

export const useAlert = () => {
  const { successMessage, errorMessage } = React.useContext(AlertContext);
  const onAlert = (type, message) => {
    if (type === "success") {
      successMessage(message);
    } else if (type === "error") {
      errorMessage(message);
    }
  };
  return { onAlert };
};
