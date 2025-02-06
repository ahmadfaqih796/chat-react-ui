import PropTypes from "prop-types";
import React from "react";

export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = React.useState(null);
  const [message, setMessage] = React.useState([]);
  const [aiMessage, setAiMessage] = React.useState([]);

  return (
    <ChatContext.Provider
      value={{
        chat,
        setChat,
        message,
        setMessage,
        aiMessage,
        setAiMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChat = () => React.useContext(ChatContext);
