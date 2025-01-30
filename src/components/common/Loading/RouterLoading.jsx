import { Box } from "@mui/material";
import React from "react";

const RouterLoading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(45deg, #f0f5ff 30%, #adc6ff 90%)",
      }}
    >
      {""}
      <div className="loader"></div>
      <div
        className="_loader__loading"
        style={{
          marginLeft: "20px",
        }}
      ></div>
    </Box>
  );
};

export default RouterLoading;
