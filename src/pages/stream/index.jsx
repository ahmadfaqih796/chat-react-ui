import { Box, Divider } from "@mui/material";
import React from "react";
import PageHeader from "../../components/widget/PageHeader";
import { socketApp } from "../../services/feathersSocket";

const CommentService = socketApp.service("messages");

const StreamApp = () => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messages = await CommentService.find({
          query: {
            $limit: -1,
            chat_id: "3c5a5804-b331-49b6-8627-dfc6f0bd2e41",
          },
        });
        console.log("Fetched messages:", messages);
        setComments(messages);
      } catch (error) {
        console.error("Gagal mengambil pesan", error);
      }
    };

    fetchMessages();
    CommentService.on("created", (newMessage) => {
      console.log("New message received:", newMessage);
      setComments((prevComments) => [...prevComments, newMessage]);
    });
    CommentService.on("removed", (removedMessage) => {
      console.log("Message removed:", removedMessage);
      setComments((prevComments) =>
        prevComments.filter((msg) => msg.id !== removedMessage.id)
      );
    });

    return () => {
      CommentService.removeListener("created");
      CommentService.removeListener("removed");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;

    try {
      const payload = {
        content: message,
        message_type: "text",
        // "is_read": false,
        // "sender_id": "1bd1e16d-7e53-472c-9b7f-5443bff18897",
        chat_id: "3c5a5804-b331-49b6-8627-dfc6f0bd2e41",
      };
      // await createComment(payload);
      await CommentService.create(payload);
      e.target.reset();
    } catch (error) {
      console.error("hello gagal", error?.message);
    }
  };

  return (
    <Box
      sx={(theme) => ({
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        transition: theme.palette.transition,
        borderRadius: "10px",
      })}
    >
      <PageHeader title="Streaming" />
      <Divider />
      <h2>Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      ) : (
        <p>Ups Maaf tidak ada pesan</p>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Type your comment..." />
        <button type="submit">Send</button>
      </form>
    </Box>
  );
};

export default StreamApp;
