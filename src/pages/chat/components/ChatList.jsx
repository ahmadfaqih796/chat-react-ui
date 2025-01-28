import React from "react";
import { USER_LIST } from "./userDummy";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CheckIcon from "@mui/icons-material/Check";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";

const ChatList = () => {
  const { onOpen } = useOutletContext();
  const [search, setSearch] = React.useState("");
  const data = USER_LIST;

  const filterData = React.useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const handleOpen = React.useCallback(
    (field) => {
      onOpen(field);
    },
    [onOpen]
  );

  return (
    <Box
      sx={{
        px: 2,
        height: "calc(100% - 70px)",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Pencarian"
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          my: 2,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            overflow: "hidden",
          },
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          height: "calc(100% - 90px)",
          overflowY: "auto",
          scrollbarWidth: "none",
          borderRadius: "10px",
        }}
      >
        {filterData.map((item) => (
          <button
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 5,
              padding: "10px",
              width: "100%",
              border: "none",
              backgroundColor: "#f0f5ff",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => handleOpen(item)}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  bgcolor: "#2f54eb",
                  width: "40px",
                  height: "40px",
                  mr: 1,
                }}
                aria-label="recipe"
              >
                {item.name.charAt(0).toUpperCase()}
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="caption">{item.last_message}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  bgcolor: "green",
                  borderRadius: "50%",
                }}
              />
              {item.is_read ? (
                <DoneAllIcon sx={{ fontSize: "15px" }} color="success" />
              ) : (
                <CheckIcon sx={{ fontSize: "15px" }} color="disabled" />
              )}
            </Box>
          </button>
        ))}
      </Box>
    </Box>
  );
};

ChatList.propTypes = {
  onOpen: PropTypes.func,
};

export default ChatList;
