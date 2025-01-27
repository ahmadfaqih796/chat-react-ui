import { Box, Divider } from "@mui/material";
import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatList from "./components/ChatList";

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
      <ChatList />
    </Box>
  );
};

export default ChatApp;
