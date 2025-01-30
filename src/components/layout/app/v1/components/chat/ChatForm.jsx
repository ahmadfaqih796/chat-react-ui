import SendIcon from "@mui/icons-material/Send";
import { Box, Button, OutlinedInput } from "@mui/material";
import React from "react";
import { useChat } from "../../../../../../context/ChatContext";

const ChatForm = () => {
  const { setMessage } = useChat();
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      setMessage((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          user_id: 1,
          created_at: new Date().toISOString(),
          comment: e.target.message.value,
        },
      ]);
      e.target.message.value = "";
    },
    [setMessage]
  );

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "70px",
        padding: "0 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <OutlinedInput
          size="small"
          name="message"
          sx={{
            width: "100%",
            //   borderRadius: style.borderRadius,
            "& fieldset": {
              borderColor: "#1BA0E2",
            },
          }}
          placeholder="Type a message..."
        />
        <Button
          aria-label="send"
          variant="contained"
          type="submit"
          size="large"
          sx={{
            //   backgroundColor: style.secondary,
            height: "100%",
            width: 40,
            minWidth: "0",
            padding: "10px",
            color: "common.white",
            //   borderRadius: style.borderRadius,
            "&:hover": {
              //  backgroundColor: style.hover,
            },
          }}
        >
          <SendIcon fontSize="small" />
        </Button>
      </Box>
    </form>
  );
};

export default ChatForm;
