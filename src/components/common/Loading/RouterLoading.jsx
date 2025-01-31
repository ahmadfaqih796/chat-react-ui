import { Box } from "@mui/material";
import React from "react";
import IconCompany from "../../animation/IconCompany";
import LoadingText from "../../animation/LoadingText";

const RouterLoading = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        // background: "linear-gradient(45deg, #f0f5ff 30%, #adc6ff 90%)",
        background: theme.palette.background.layout,
      })}
    >
      <IconCompany />
      <LoadingText title="Loading" />
    </Box>
  );
};

export default RouterLoading;
