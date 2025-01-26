import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
const ChatLayout = ({ onOpenDrawer }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "10px",
        p: 1,
      }}
    >
      <button onClick={() => onOpenDrawer()}>Open</button>
      ChatLayout
    </Box>
  );
};

ChatLayout.propTypes = {
  onOpenDrawer: PropTypes.func,
};

export default ChatLayout;
