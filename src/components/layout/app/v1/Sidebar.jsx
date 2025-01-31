import {
  ContactsSharp,
  LogoutOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAlert } from "../../../../hooks/useAlert";
import { useAuth } from "../../../../hooks/useAuth";
import IconButton from "../../../common/Button/IconButton";
import Indicator from "./components/sidebar/Indicator";
import ThemeButton from "./components/sidebar/ThemeButton";

const MENU_LIST = [
  {
    id: 1,
    title: "Chat",
    icon: <MessageOutlined />,
    path: "/chat",
  },
  {
    id: 2,
    title: "Contact",
    icon: <ContactsSharp />,
    path: "/contact",
  },
];

const Sidebar = () => {
  const { onLogout } = useAuth();
  const { onAlert } = useAlert();
  const location = useLocation();

  const [activePath, setActivePath] = React.useState(location.pathname);

  React.useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handlePositionPath = (path) => {
    switch (path) {
      case "/chat":
        return 0;
      case "/contact":
        return 50;
      default:
        return 0;
    }
  };

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
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.palette.background.paper,
        borderRadius: "10px",
        p: 1,
        position: "relative",
      })}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          position: "relative",
        }}
      >
        <Indicator activePath={handlePositionPath(activePath)} />

        {MENU_LIST.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
            key={item.id}
          >
            <IconButton title={item.title}>{item.icon}</IconButton>
          </NavLink>
        ))}
        {/* <NavLink
          to="/chat"
          // className={({ isActive }) => (isActive ? "active" : "")}
        >
          <IconButton title="Chat">
            <MessageOutlined />
          </IconButton>
        </NavLink> */}
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
        <ThemeButton />
        <IconButton title="Logout" onClick={handleLogOut}>
          <LogoutOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
