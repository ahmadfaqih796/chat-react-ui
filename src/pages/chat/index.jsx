import { Box, Divider } from "@mui/material";
import React from "react";
import ChatHeader from "./components/ChatHeader";

const ChatApp = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <ChatHeader />
      <Divider />
    </Box>
  );
};

export default ChatApp;
