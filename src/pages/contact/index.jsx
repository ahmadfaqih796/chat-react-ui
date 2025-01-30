import { Box, Divider } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";

const ContactApp = () => {
  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
    >
      <PageHeader title="Contact" />
      <Divider />
    </Box>
  );
};

export default ContactApp;
