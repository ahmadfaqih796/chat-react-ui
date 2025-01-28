import { Box, Divider } from "@mui/material";
import React from "react";
import ProfileHeader from "./components/profile/ProfileHeader";
import PropTypes from "prop-types";
import ProfileContent from "./components/profile/ProfileContent";

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
      <Divider />
      <ProfileContent />
    </Box>
  );
};

Profile.propTypes = {
  onClose: PropTypes.func,
};

export default Profile;
