import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import PropTypes from "prop-types";
import React from "react";
import { useOutletContext } from "react-router-dom";
import chatService from "../../../services/ChatService";

const ChatList = () => {
  const { onOpen, user } = useOutletContext();
  const [chatList, setChatList] = React.useState([]);

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await chatService.findChat();
        setChatList([
          ...response,
          {
            id: "ai",
            name: "Faqih AI",
            caption: "Helpful AI assistant",
            is_ai: true,
          },
        ]);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };
    fetchChat();
  }, []);

  const filterData = React.useMemo(() => {
    return chatList.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, chatList]);

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
        <AnimatePresence mode="sync">
          {filterData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                // delay: 0.5,
              }}
            >
              <Button
                sx={(theme) => ({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 5,
                  padding: "10px",
                  width: "100%",
                  border: "none",
                  transition: theme.palette.transition,
                  backgroundColor:
                    user?.id === item.id
                      ? theme.palette.primary.default
                      : theme.palette.background.container,
                  textTransform: "none",
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                  borderRadius: "10px",
                })}
                onClick={() => handleOpen(item)}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: "#2f54eb",
                      width: "40px",
                      height: "40px",
                      mr: 1,
                      color: "#fff",
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
                    <Typography variant="caption">
                      {item.last_message?.content ||
                        item.caption ||
                        "Belum ada pesan"}
                    </Typography>
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
              </Button>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

ChatList.propTypes = {
  onOpen: PropTypes.func,
};

export default ChatList;
