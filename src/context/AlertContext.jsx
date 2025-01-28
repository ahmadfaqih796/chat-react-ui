import PropTypes from "prop-types";
import React from "react";
import MuiAlert from "../components/common/Alert/MuiAlert";
import { alertReducer, initialState } from "../reducers/alertReducer";

export const AlertContext = React.createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(alertReducer, initialState);
  const closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  const successMessage = (message) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        open: true,
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
        open: true,
        message: message,
        type: "error",
        title: "Gagal",
      },
    });
  };

  const typeAlert = (x) => {
    return (
      <MuiAlert
        isOpen={x.isOpen}
        title={x.title}
        type={x.type}
        onConfirm={closeAlert}
        message={x.message}
      />
    );
    // if (x.type === "success") {
    //   return (
    //     <SweetAlert
    //       success
    //       open={true}
    //       title={x.title}
    //       onConfirm={closeAlert}
    //       message={x.message}
    //     />
    //   );
    // } else if (x.type === "error") {
    //   return (
    //     <SweetAlert
    //       error
    //       title={x.title}
    //       onConfirm={closeAlert}
    //       message={x.message}
    //     />
    //   );
    // }
  };
  return (
    <AlertContext.Provider value={{ successMessage, errorMessage }}>
      {state.isOpen && typeAlert(state)}
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
