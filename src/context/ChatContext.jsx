import React from "react";
import PropTypes from "prop-types";
// import { DUMMY_MESSAGES } from "../components/layout/app/v1/components/chat/dummy";

export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = React.useState(null);
  const [message, setMessage] = React.useState([]);

  return (
    <ChatContext.Provider value={{ chat, setChat, message, setMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChat = () => React.useContext(ChatContext);
