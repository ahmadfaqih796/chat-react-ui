import { Box } from "@mui/material";
import React from "react";
import IconCompany from "../../animation/IconCompany";

const RouterLoading = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "linear-gradient(45deg, #f0f5ff 30%, #adc6ff 90%)",
        background: theme.palette.background.layout,
      })}
    >
      <IconCompany />
      <Box
        sx={(theme) => ({
          width: "fit-content",
          fontSize: "40px",
          lineHeight: 1.5,
          fontFamily: "system-ui, sans-serif",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "transparent",
          WebkitTextStroke: `1px ${theme.palette.text.primary}`,
          background: `radial-gradient(1.13em at 50% 1.6em, ${theme.palette.text.primary} 99%, transparent 101%) 
            calc(50% - 1.6em) 0/3.2em 100% text,
            radial-gradient(1.13em at 50% -0.8em, transparent 99%, ${theme.palette.text.primary} 101%) 
            50% 0.8em/3.2em 100% repeat-x text`,
          backgroundPosition: "calc(50% - 1.6em) 0, 50% 0.8em",
          backgroundSize: "3.2em 100%, 3.2em 100%",
          position: "relative",
          "&::before": {
            content: '"Loading"',
          },
          animation: "l9 2s linear infinite",
          "@keyframes l9": {
            "0%": {
              backgroundPosition: "calc(50% - 1.6em) 0, 50% 0.8em",
            },
            "100%": {
              backgroundPosition:
                "calc(50% + 1.6em) 0, calc(50% + 3.2em) 0.8em",
            },
          },
        })}
      />
    </Box>
  );
};

export default RouterLoading;
