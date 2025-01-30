import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import ChatBlank from "./components/chat/ChatBlank";
import ChatForm from "./components/chat/ChatForm";
import ChatHeader from "./components/chat/ChatHeader";
import ChatMessage from "./components/chat/ChatMessage";
const ChatLayout = ({ data, onOpenDrawer, onClose, isMobile }) => {
  if (!data) {
    return <ChatBlank />;
  }
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
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
