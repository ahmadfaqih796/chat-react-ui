import { Box, Container, Drawer } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";

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
            bgcolor: "blue",
          }}
        >
          sepuh
        </Box>
        <Box
          sx={{
            width: `calc(100% - ${WIDTH.sidebar} - ${WIDTH.content} - ${
              open ? WIDTH.profile : "0px"
            })`,
            bgcolor: "green",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Container>
            <button onClick={handleOpenDrawer}>Open</button>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            voluptatibus ipsum minima. Nulla perferendis quasi quia labore ex!
            Earum quaerat voluptatibus inventore nihil sunt labore, doloribus
            ducimus voluptatum fuga ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil quasi eligendi praesentium eius velit
            deserunt libero suscipit enim maiores! Repudiandae quis consequuntur
            voluptatem earum eligendi, nemo eos atque qui quo.
          </Container>
          <Drawer
            sx={{
              width: WIDTH.profile,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                background: "yellow",
                width: WIDTH.profile,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            sasasa
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default BaseLayout;
