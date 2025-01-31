import React from "react";

import { motion } from "motion/react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const MotionBox = motion(Box);

const Indicator = ({ activePath }) => {
  return (
    <MotionBox
      layoutId="indicator"
      initial={false}
      animate={{
        top: activePath,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      sx={(theme) => ({
        position: "absolute",
        left: "37px",
        width: "5px",
        height: "35px",
        background: theme.palette.background.icon,
        borderRadius: "10px",
        zIndex: 100,
      })}
    />
  );
};

Indicator.propTypes = {
  activePath: PropTypes.number,
};

export default Indicator;
