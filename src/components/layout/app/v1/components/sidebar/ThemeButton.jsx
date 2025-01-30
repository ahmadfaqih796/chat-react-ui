import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useModeTheme } from "../../../../../../hooks/useModeTheme";
import IconButton from "../../../../../common/Button/IconButton";

const MODE_LIST = [
  {
    title: "Light",
    icon: <LightModeIcon />,
    theme: "light",
  },
  {
    title: "Dark",
    icon: <DarkModeIcon />,
    theme: "dark",
  },
  {
    title: "System",
    icon: <SettingsBrightnessIcon />,
    theme: "system",
  },
];

const ThemeButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { mode, onMode } = useModeTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        title="Mode"
        onClick={handleClick}
        aria-controls={open ? "brightness-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <LightModeIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="brightness-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: -0.3,
              ml: 2,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                bottom: 0,
                left: -5,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-100%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {MODE_LIST.map((field) => (
          <MenuItem
            key={field.theme}
            onClick={() => {
              onMode(field.theme);
              handleClose();
            }}
            selected={field.theme === mode}
          >
            <ListItemIcon>{field.icon}</ListItemIcon>
            {field.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ThemeButton;
