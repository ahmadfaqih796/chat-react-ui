import { Box } from "@mui/material";
import React from "react";

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
      <Box
        sx={(theme) => ({
          width: "50px",
          aspectRatio: "1.154",
          position: "relative",
          background: `conic-gradient(from 120deg at 50% 64%, 
          transparent, ${theme.palette.background.icon} 1deg 120deg, transparent 121deg)`,
          animation: "l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
          "@keyframes l27-0": {
            "0%, 30%": { transform: "rotate(0deg)" },
            "70%": { transform: "rotate(120deg)" },
            "70.01%, 100%": { transform: "rotate(360deg)" },
          },
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "inherit",
            transformOrigin: "50% 66%",
            animation: "l27-1 1.5s infinite",
          },
          "&::after": {
            "--s": "-1",
          },
          "@keyframes l27-1": {
            "0%": {
              transform: "rotate(calc(var(--s, 1) * 120deg)) translate(0)",
            },
            "30%, 70%": {
              transform:
                "rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px)",
            },
            "100%": {
              transform: "rotate(calc(var(--s, 1) * 120deg)) translate(0)",
            },
          },
        })}
      />
      <Box
        sx={(theme) => ({
          width: "fit-content",
          fontSize: "40px",
          lineHeight: 1.5,
          marginLeft: "10px",
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
