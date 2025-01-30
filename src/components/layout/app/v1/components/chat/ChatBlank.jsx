import { Box, Typography } from "@mui/material";
import React from "react";

const ChatBlank = () => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
    >
      <img src="/chat_layout.svg" alt="chat_layout" style={{ width: "40%" }} />
      <Typography variant="h5" textAlign="center" width="80%" sx={{ my: 2 }}>
        Unduh Portgeither Massenger untuk Windows
      </Typography>
      <Typography variant="body1" textAlign="center" width="90%">
        Buat Panggilan, bagikan layar, dan dapatkan pengalaman lebih cepat
        dengan mengunduh Portgeither Massenger untuk Windows.
      </Typography>
    </Box>
  );
};

export default ChatBlank;
