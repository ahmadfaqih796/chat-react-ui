import { Box } from "@mui/material";
import React from "react";

const IconCompany = () => {
  return (
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
  );
};

export default IconCompany;
