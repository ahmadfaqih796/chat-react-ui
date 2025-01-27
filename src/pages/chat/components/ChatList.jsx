import React from "react";
import { USER_LIST } from "./userDummy";
import { Box, TextField } from "@mui/material";

const ChatList = () => {
  const [search, setSearch] = React.useState("");
  const data = USER_LIST;

  const filterData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Pencarian"
        variant="outlined"
        size="small"
        fullWidth
        sx={{
          mt: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            overflow: "hidden",
          },
        }}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filterData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Box>
  );
};

export default ChatList;
