import React from "react";
import PropTypes from "prop-types";

export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const [chat, setChat] = React.useState(null);
  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useChat = () => React.useContext(ChatContext);
