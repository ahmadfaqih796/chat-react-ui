import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

const ProfileHeader = ({ onClose }) => {
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
        onClick={() => onClose()}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="body1">Info Kontak</Typography>
        </Box>
      </button>
      <IconButton onClick={() => onClose()}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

ProfileHeader.propTypes = {
  onClose: PropTypes.func,
};

export default ProfileHeader;
