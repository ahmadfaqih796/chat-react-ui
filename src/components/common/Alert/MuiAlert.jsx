import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const MuiAlert = ({ isOpen, onConfirm, message, type }) => {
  return (
    <>
      <Snackbar open={isOpen} autoHideDuration={5000} onClose={onConfirm}>
        <Alert
          onClose={onConfirm}
          severity={type || "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

MuiAlert.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  message: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default MuiAlert;
