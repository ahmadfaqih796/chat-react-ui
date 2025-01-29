import { Box, Divider } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";
import { motion } from "motion/react";

const ContactApp = () => {
  // const transition = {
  //   duration: 2,
  //   delay: 0,
  //   ease: [0, 0.71, 0.2, 1.01],
  // };
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      // transition={transition}
      // exit={{ opacity: 0, transform: "translateY(-100%)" }}
      style={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <PageHeader title="Contact" />
        <Divider />
      </Box>
    </motion.div>
  );
};

export default ContactApp;
