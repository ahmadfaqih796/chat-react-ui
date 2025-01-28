import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ChatLayout from "./Chat";
import Profile from "./Profile";
import Sidebar from "./Sidebar";

const WIDTH = {
  sidebar: "70px",
  content: "350px",
  profile: "350px",
};

const BaseLayout = () => {
  const [open, setOpen] = React.useState(false);
  const [isOpenChat, setIsOpenChat] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenChat = () => {
    setIsOpenChat(!isOpenChat);
  };

  return (
    <div>
      {isMobile && (
        <AppBar position="fixed">
          <Toolbar
            sx={{
              height: "64px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => handleOpenChat()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Chatvvv
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box
        sx={{
          pt: isMobile ? "64px" : "0px",
          display: "flex",
          width: "100vw",
          height: "100vh",
          bgcolor: "#f0f5ff",
          overflowX: "hidden",
          scrollbarWidth: "none",
        }}
      >
        <Box
          sx={{
            display: isMobile ? "none" : "block",
            width: WIDTH.sidebar,
            p: 1,
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100vw" : "350px",
            minWidth: isMobile ? "100%" : "350px",
            p: 1,
            transition: "all 0.5s ease-in-out",
            transform:
              isOpenChat && isMobile ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            width: isMobile
              ? "100%"
              : `calc(100% - ${WIDTH.sidebar} - ${WIDTH.content} - ${
                  open && isDesktop ? WIDTH.profile : "0px"
                })`,
            minWidth: isMobile
              ? "100%"
              : `calc(100% - ${WIDTH.sidebar} - ${WIDTH.content} - ${
                  open && isDesktop ? WIDTH.profile : "0px"
                })`,
            transition: "all 0.5s ease-in-out",
            transform:
              isOpenChat && isMobile ? "translateX(-100%)" : "translateX(0)",
            p: 1,
          }}
        >
          <ChatLayout
            isMobile={isMobile}
            onClose={() => handleOpenChat()}
            onOpenDrawer={() => handleOpenDrawer()}
          />
          <Drawer
            sx={{
              width: WIDTH.profile,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                border: "none",
                background: isDesktop ? "#f0f5ff" : "#fff",
                p: 1,
                width: WIDTH.profile,
                boxSizing: "border-box",
              },
            }}
            variant={isDesktop ? "persistent" : "temporary"}
            anchor="right"
            open={open}
          >
            <Profile onClose={() => handleOpenDrawer()} />
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default BaseLayout;
