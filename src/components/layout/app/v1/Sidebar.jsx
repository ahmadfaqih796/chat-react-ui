import {
  ContactsSharp,
  LogoutOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAlert } from "../../../../hooks/useAlert";
import { useAuth } from "../../../../hooks/useAuth";
import IconButton from "../../../common/Button/IconButton";

const Sidebar = () => {
  const { onLogout } = useAuth();
  const { onAlert } = useAlert();

  const handleLogOut = () => {
    try {
      onLogout();
      onAlert("success", "Logout berhasil");
    } catch (error) {
      onAlert("error", "Gagal Logout");
    }
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
        {/* {menuRouter.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconButton title={label}>
              {Icon &&
                React.createElement(require("@mui/icons-material")[Icon], {
                  color: "primary",
                })}
            </IconButton>
          </NavLink>
        ))} */}
        <NavLink
          to="/chat"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <IconButton title="Chat">
            <MessageOutlined color="primary" />
          </IconButton>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <IconButton title="Contact">
            <ContactsSharp color="primary" />
          </IconButton>
        </NavLink>
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
        <IconButton title="Logout" onClick={handleLogOut}>
          <LogoutOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
