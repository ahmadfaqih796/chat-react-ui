import AddCommentIcon from "@mui/icons-material/AddComment";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
const ChatHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        p: 1,
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          width: "100%",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5">Chat</Typography>
        </Box>
      </button>
      <IconButton>
        <AddCommentIcon />
      </IconButton>
    </Box>
  );
};

export default ChatHeader;
