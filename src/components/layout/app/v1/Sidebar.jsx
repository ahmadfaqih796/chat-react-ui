import {
  ContactsSharp,
  LogoutOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import IconButton from "../../../common/Button/IconButton";
import { useAuth } from "../../../../hooks/useAuth";

const Sidebar = () => {
  const { onLogout } = useAuth();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: "10px",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton title="Chat">
          <MessageOutlined fill="#fff" />
        </IconButton>
        <IconButton title="Contact">
          <ContactsSharp />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <IconButton title="Logout" onClick={onLogout}>
          <LogoutOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
