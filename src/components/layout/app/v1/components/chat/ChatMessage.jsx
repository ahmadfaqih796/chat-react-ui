import { Box, Chip, Divider, Typography } from "@mui/material";
import moment from "moment";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useChat } from "../../../../../../context/ChatContext";
import { useAuth } from "../../../../../../hooks/useAuth";
import { socketApp } from "../../../../../../services/feathersSocket";
import { formatAIResponse } from "../../../../../../utils/formatAIResponse";

const CommentService = socketApp.service("messages");

const ChatMessage = ({ loading }) => {
  const { chat, message, setMessage } = useChat();
  const { session } = useAuth();

  const scrollRef = useRef(null);

  const memoizedMessages = useMemo(() => message, [message]);
  const fetchMessages = useCallback(async () => {
    try {
      const response = await CommentService.find({
        query: {
          chat_id: chat.id,
          $limit: -1,
          $sort: { created_at: 1 },
        },
      });
      console.log("response", response);
      setMessage(response);
    } catch (error) {
      console.error("Gagal mengambil pesan", error);
    }
  }, [chat.id, setMessage]);

  useEffect(() => {
    if (chat?.id) {
      fetchMessages();
      CommentService.on("created", (newMessage) => {
        if (newMessage.chat_id === chat.id) {
          setMessage((prevComments) => [...prevComments, newMessage]);
        }
      });
      CommentService.on("removed", (removedMessage) => {
        setMessage((prevComments) =>
          prevComments.filter((msg) => msg.id !== removedMessage.id)
        );
      });
    }

    return () => {
      CommentService.removeListener("created");
      CommentService.removeListener("removed");
    };
  }, [chat.id, fetchMessages, setMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }, 100);
    }
  }, [memoizedMessages]);

  const isDifferentDate = (date1, date2) => {
    return (
      new Date(date1).toLocaleDateString() !==
      new Date(date2).toLocaleDateString()
    );
  };

  return (
    <Box sx={{ height: "calc(100% - 70px - 70px)", pl: 2 }}>
      {Array.isArray(memoizedMessages) && memoizedMessages.length > 0 ? (
        <Box
          ref={scrollRef}
          sx={{
            overflowY: "auto",
            height: "100%",
            display: "flex",
            paddingRight: "10px",
            flexDirection: "column",
            scrollBehavior: "smooth",
          }}
        >
          {memoizedMessages?.map((item, index) => (
            <Box
              key={item.id}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {index === 0 ||
              isDifferentDate(
                memoizedMessages[index - 1].created_at,
                item.created_at
              ) ? (
                <Divider sx={{ my: 1 }}>
                  <Chip
                    label={moment(item.created_at).format("DD MMMM YYYY")}
                  />
                </Divider>
              ) : null}
              <Box
                sx={{
                  maxWidth: "80%",
                  whiteSpace: "pre-wrap",
                  alignSelf:
                    item.sender_id === session?.id ? "flex-end" : "flex-start",
                  textAlign: "justify",
                }}
              >
                <Box
                  sx={(theme) => ({
                    padding: "8px 10px",
                    borderRadius: "5px",
                    margin: "5px 0",
                    fontWeight: "normal",
                    fontFamily: "monospace",
                    whiteSpace: "break-spaces",
                    wordWrap: "break-word",
                    overflowX: "auto",
                    maxWidth: "100%",
                    display: "block",
                    scrollbarWidth: "none",
                    backgroundColor:
                      item.sender_id === session?.id
                        ? theme.palette.secondary.default
                        : theme.palette.background.container,
                  })}
                  dangerouslySetInnerHTML={{
                    __html: formatAIResponse(item.content || " "),
                  }}
                />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    mt: "-3px",
                    fontSize: "10px",
                  }}
                >
                  {moment(item.created_at).format("HH:mm")}
                </Typography>
              </Box>
            </Box>
          ))}
          {loading && chat.id === "ai" && (
            <Box sx={{ display: "flex" }}>
              <Typography variant="body1" color="textSecondary">
                AI is typing...
              </Typography>
            </Box>
          )}
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          kosong
        </Box>
      )}
    </Box>
  );
};

ChatMessage.propTypes = {
  loading: PropTypes.bool,
};

export default ChatMessage;
