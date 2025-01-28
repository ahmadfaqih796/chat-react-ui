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
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";

const WIDTH = {
  sidebar: "70px",
  content: "350px",
  profile: "350px",
};

const BaseLayout = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handleOpenDrawer = () => {
    setOpen(!open);
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
              // onClick={toggleDrawer}
              // className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Chat
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
          overflowX: "auto",
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
            transition: "all 0.2s ease-in-out",
            p: 1,
          }}
        >
          <ChatLayout onOpenDrawer={() => handleOpenDrawer()} />
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
