import AddCommentIcon from "@mui/icons-material/AddComment";
import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";
import ChatList from "./components/ChatList";
import { motion } from "motion/react";

const ChatApp = () => {
  const transition = {
    duration: 2,
    delay: 0,
    // ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={transition}
      exit={{ opacity: 0, transform: "translateY(-100%)" }}
      style={{
        height: "100%",
        transform: "translateZ(-100%)",
        overflow: "hidden",
      }}
    >
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
    </motion.div>
  );
};

export default ChatApp;
