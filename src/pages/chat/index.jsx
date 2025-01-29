import AddCommentIcon from "@mui/icons-material/AddComment";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import Motion from "../../components/widget/Motion";
import PageHeader from "../../components/widget/PageHeader";
import ChatList from "./components/ChatList";

const ChatApp = () => {
  return (
    <Motion>
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
    </Motion>
  );
};

export default ChatApp;
