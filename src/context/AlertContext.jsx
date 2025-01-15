import { createContext, useReducer, useState } from "react";
import { alertReducer, initialState } from "../reducers/alertReducer";
import SweetAlert from "../components/common/Alert/SweetAlert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);
  const closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  const successMessage = (message) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        message: message,
        type: "success",
        title: "Berhasil",
      },
    });
  };

  const errorMessage = (message) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        message: message,
        type: "error",
        title: "Gagal",
      },
    });
  };

  const typeAlert = (x) => {
    if (x.type === "success") {
      return (
        <SweetAlert
          success
          title={x.title}
          onConfirm={closeAlert}
          message={x.message}
        />
      );
    } else if (x.type === "error") {
      return (
        <SweetAlert
          error
          title={x.title}
          onConfirm={closeAlert}
          message={x.message}
        />
      );
    }
  };
  return (
    <AlertContext.Provider value={{ successMessage, errorMessage }}>
      {state.isOpen && typeAlert(state)}
      {children}
    </AlertContext.Provider>
  );
};
