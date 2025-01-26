import { Box } from "@mui/material";
import React from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import IconButton from "../../../common/Button/IconButton";

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "10px",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton title="Alarm">
          <AccessAlarm />
        </IconButton>
        <IconButton>
          <ThreeDRotation />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <img src="https://picsum.photos/40" alt="profile" />
        <img src="https://picsum.photos/40" alt="profile" />
      </Box>
    </Box>
  );
};

export default Sidebar;
