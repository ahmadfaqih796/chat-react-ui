import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
const PageHeader = ({ action }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        p: 1,
      }}
    >
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          width: "100%",
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h5">PageHeader</Typography>
        </Box>
      </button>
      {action}
    </Box>
  );
};

PageHeader.propTypes = {
  action: PropTypes.node,
};

export default PageHeader;
