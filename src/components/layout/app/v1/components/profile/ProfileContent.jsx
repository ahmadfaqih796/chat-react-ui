import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

const ProfileContent = () => {
  const USER_DATA = {
    alamat:
      "Jl. Raya Cibinong, RT.03/RW.03, Cibinong, Kec. Cibinong, Kota Bekasi, Jawa Barat 17530, Indonesia",
    email: "ahmadfaqih@gmail.com",
    nohp: "0812-3456-7890",
    username: "ahmadfaqih",
    website: "https://ahmadfaqih.com",
    joined: "2021-01-01",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100% - 70px)",
        justifyContent: "space-evenly",
        p: 1,
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar sx={{ width: 120, height: 120 }} alt="AFA" src="/logo192.png">
          AFA
        </Avatar>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Ahmad Faqih
        </Typography>
        <Typography variant="caption" sx={{ mb: 2 }}>
          ahmadfaqih@gmail.com
        </Typography>
      </Box>

      <Box>
        {Object.keys(USER_DATA).map((item, index) => (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
              textAlign: "justify",
              mb: 1,
              px: 1,
            }}
            key={index}
          >
            <Typography variant="body2">{item}</Typography>
            <Typography variant="caption">{USER_DATA[item]}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Button size="small" variant="contained" color="error">
          <DeleteIcon />
        </Button>
        <Button size="small" variant="contained" color="warning">
          Block
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileContent;
