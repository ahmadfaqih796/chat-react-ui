import { Box, Divider } from "@mui/material";
import React from "react";
import Motion from "../../components/widget/Motion";
import PageHeader from "../../components/widget/PageHeader";

const ContactApp = () => {
  return (
    <Motion>
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
    </Motion>
  );
};

export default ContactApp;
