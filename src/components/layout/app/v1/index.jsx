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
  const [user, setUser] = React.useState(null);
  const [isOpenChat, setIsOpenChat] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  const handleOpenChat = (data) => {
    setUser(data);
    setIsOpenChat(!isOpenChat);
  };

  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
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
              Chat Data
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
          background: "linear-gradient(45deg, #f0f5ff 30%, #adc6ff 90%)",
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
          <Outlet context={{ onOpen: handleOpenChat, user: user }} />
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
            transform: isOpenChat && isMobile ? "translateX(-100%)" : "none",
            p: 1,
          }}
        >
          <ChatLayout
            data={user}
            isMobile={isMobile}
            onClose={(x) => handleOpenChat(x)}
            onOpenDrawer={() => handleOpenDrawer()}
          />
          <Drawer
            sx={{
              width: WIDTH.profile,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                border: "none",
                background: isDesktop ? "transparent" : "#fff",
                p: isDesktop ? 1 : 0,
                width: WIDTH.profile,
                boxSizing: "border-box",
              },
            }}
            transitionDuration={{
              enter: 700,
              exit: 500,
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
