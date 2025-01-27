import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ChatHeader from "./components/chat/ChatHeader";
import ChatMessage from "./components/chat/ChatMessage";
import ChatForm from "./components/chat/ChatForm";
const ChatLayout = ({ onOpenDrawer }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <ChatHeader onOpenDrawer={onOpenDrawer} />
      <Divider />
      <ChatMessage />
      <Divider />
      <ChatForm />
    </Box>
  );
};

ChatLayout.propTypes = {
  onOpenDrawer: PropTypes.func,
};

export default ChatLayout;
