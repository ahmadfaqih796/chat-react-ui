import AddCommentIcon from "@mui/icons-material/AddComment";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";
import ChatList from "./components/ChatList";

const ChatApp = () => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
    >
      <PageHeader
        title="Chat"
        action={
          <IconButton>
            <AddCommentIcon />
          </IconButton>
        }
      />
      <Divider />
      <ChatList />
    </Box>
  );
};

export default ChatApp;
