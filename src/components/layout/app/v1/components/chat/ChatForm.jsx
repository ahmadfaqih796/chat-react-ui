import SendIcon from "@mui/icons-material/Send";
import { Box, Button, OutlinedInput } from "@mui/material";
import React from "react";
import { useChat } from "../../../../../../context/ChatContext";
import AiService from "../../../../../../services/AiService";
import { useAlert } from "../../../../../../hooks/useAlert";
import PropTypes from "prop-types";

const ChatForm = ({ onLoading, isLoading }) => {
  const { chat, setMessage } = useChat();
  const { onAlert } = useAlert();

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const userMessage = e.target.message.value;
      onLoading(true);
      try {
        setMessage((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            user_id: 1,
            created_at: new Date().toISOString(),
            comment: userMessage,
          },
        ]);
        onAlert("success", "Ini Form Chat");
      } catch (error) {
        onAlert("error", error?.message || "Message failed to send!");
      } finally {
        onLoading(false);
        e.target.message.value = "";
      }
    },
    [setMessage, onAlert, onLoading]
  );

  const handleAISubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      const userMessage = e.target.message.value;
      setMessage((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          user_id: 1,
          created_at: new Date().toISOString(),
          comment: userMessage,
        },
      ]);
      onLoading(true);
      try {
        const aiResponse = await AiService.generateResponse(userMessage);
        if (aiResponse) {
          setMessage((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              user_id: 2,
              created_at: new Date().toISOString(),
              comment: aiResponse,
            },
          ]);
          onAlert("success", "Ini AI Chat");
        }
      } catch (error) {
        onAlert("error", "Hapunten, AI gagal merespon, silahkan coba lagi");
        console.log("maaffff", error);
      } finally {
        onLoading(false);
        e.target.message.value = "";
      }
    },
    [setMessage, onAlert, onLoading]
  );

  return (
    <form
      onSubmit={chat.is_ai ? handleAISubmit : handleSubmit}
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
          disabled={isLoading}
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
          disabled={isLoading}
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

ChatForm.propTypes = {
  onLoading: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default ChatForm;
