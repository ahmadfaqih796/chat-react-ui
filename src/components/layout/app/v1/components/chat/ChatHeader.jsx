import { Box, Avatar, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";

const ChatHeader = ({ onOpenDrawer, onClose, isMobile }) => {
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
        onClick={() => onOpenDrawer()}
      >
        <Avatar
          sx={{ bgcolor: "red", width: "40px", height: "40px", mr: 1 }}
          aria-label="recipe"
        >
          R
        </Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1">Ahmad Faqih Arifin</Typography>
          <Typography variant="caption">Chat</Typography>
        </Box>
      </button>
      {isMobile && (
        <IconButton onClick={() => onClose()}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

ChatHeader.propTypes = {
  isMobile: PropTypes.bool,
  onClose: PropTypes.func,
  onOpenDrawer: PropTypes.func,
};

export default ChatHeader;
