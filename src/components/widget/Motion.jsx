import React from "react";
import { motion } from "motion/react";
import { PropTypes } from "prop-types";

const transition = {
  duration: 0.5,
  delay: 0,
  // ease: [0, 0.71, 0.2, 1.01],
};

const Motion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, transform: "translateY(-100%)" }}
      animate={{ opacity: 1, transform: "translateY(0)" }}
      transition={transition}
      exit={{ opacity: 1, transform: "translateY(100%)" }}
      style={{
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

Motion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Motion;
