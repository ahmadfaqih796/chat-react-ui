import { Box, Drawer } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ChatLayout from "./Chat";
import Sidebar from "./Sidebar";
import Profile from "./Profile";

const WIDTH = {
  sidebar: "70px",
  content: "350px",
  profile: "350px",
};

const BaseLayout = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          bgcolor: "#bae0ff",
        }}
      >
        <Box
          sx={{
            width: WIDTH.sidebar,
            p: 1,
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "350px",
            p: 1,
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            width: `calc(100% - ${WIDTH.sidebar} - ${WIDTH.content} - ${
              open ? WIDTH.profile : "0px"
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
                background: "#bae0ff",
                p: 1,
                width: WIDTH.profile,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
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
