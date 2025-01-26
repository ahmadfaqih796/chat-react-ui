import {
  ContactsSharp,
  LogoutOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import IconButton from "../../../common/Button/IconButton";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { onLogout } = useAuth();
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

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
        <IconButton title="Chat" onClick={() => handleClick("/chat")}>
          <MessageOutlined fill="#fff" />
        </IconButton>
        <IconButton
          title="Contact"
          onClick={() => handleClick("/chat/contact")}
        >
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
