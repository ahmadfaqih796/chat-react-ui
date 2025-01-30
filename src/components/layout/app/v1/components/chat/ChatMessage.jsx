import { Box, Chip, Divider, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { useChat } from "../../../../../../context/ChatContext";

const ChatMessage = () => {
  const { message } = useChat();
  const session = {
    id: 1,
  };

  const scrollRef = React.useRef(null);
  const data = React.useMemo(() => {
    return message;
  }, [message]);
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [data]);

  const isDifferentDate = (date1, date2) => {
    return (
      new Date(date1).toLocaleDateString() !==
      new Date(date2).toLocaleDateString()
    );
  };
  return (
    <Box sx={{ height: "calc(100% - 70px - 70px)", pl: 2 }}>
      {Array.isArray(data) && data.length > 0 ? (
        <Box
          ref={scrollRef}
          sx={{
            overflowY: "auto",
            height: "100%",
            display: "flex",
            paddingRight: "10px",
            flexDirection: "column",
            scrollBehavior: "smooth",
            // scrollbarWidth: "thin",
            // scrollbarColor: "rgba(0, 0, 0, 0.2) transparent",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            // "&::-webkit-scrollbar-track": {
            //   background: "#f1f1f1",
            // },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
            },
            // "&::-webkit-scrollbar-thumb:hover": {
            //   background: "#555",
            // },
          }}
        >
          {data?.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {index === 0 ||
              isDifferentDate(data[index - 1].created_at, item.created_at) ? (
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
                    item.user_id === session?.id ? "flex-end" : "flex-start",
                  textAlign: "justify",
                }}
              >
                <Box
                  sx={{
                    padding: "8px 10px",
                    borderRadius: "5px",
                    margin: "5px 0",
                    fontWeight: "normal",

                    backgroundColor: "#D3F1DF",
                  }}
                >
                  {item.comment}
                </Box>
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
          {/* <Image src={chatImage} width={250} height={250} alt="chat" priority /> */}
        </Box>
      )}
    </Box>
  );
};

export default ChatMessage;
