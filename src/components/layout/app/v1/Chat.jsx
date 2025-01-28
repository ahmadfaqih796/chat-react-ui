import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ChatHeader from "./components/chat/ChatHeader";
import ChatMessage from "./components/chat/ChatMessage";
import ChatForm from "./components/chat/ChatForm";
const ChatLayout = ({ data, onOpenDrawer, onClose, isMobile }) => {
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
      <ChatHeader
        data={data}
        onClose={onClose}
        onOpenDrawer={onOpenDrawer}
        isMobile={isMobile}
      />
      <Divider />
      <ChatMessage />
      <Divider />
      <ChatForm />
    </Box>
  );
};

ChatLayout.propTypes = {
  data: PropTypes.object,
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenDrawer: PropTypes.func,
};

export default ChatLayout;
