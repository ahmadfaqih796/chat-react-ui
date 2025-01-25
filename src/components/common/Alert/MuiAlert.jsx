import { Alert, Snackbar } from "@mui/material";
import React from "react";

const MuiAlert = ({ isOpen, onConfirm, message, type, title, ...props }) => {
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

export default MuiAlert;
