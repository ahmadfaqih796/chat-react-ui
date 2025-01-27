import { Box } from "@mui/material";
import React from "react";
import ProfileHeader from "./components/profile/ProfileHeader";
import PropTypes from "prop-types";

const Profile = ({ onClose }) => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "10px",
      }}
    >
      <ProfileHeader onClose={onClose} />
    </Box>
  );
};

Profile.propTypes = {
  onClose: PropTypes.func,
};

export default Profile;
