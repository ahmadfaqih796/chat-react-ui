import { Box, Divider } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";

const ContactApp = () => {
  return (
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
  );
};

export default ContactApp;
