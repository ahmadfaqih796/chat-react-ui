import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
const PageHeader = ({ title, action }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        pl: 2,
        pr: 1,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h6">{title || "Page Header"}</Typography>
      </Box>
      {action}
    </Box>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  action: PropTypes.node,
};

export default PageHeader;
