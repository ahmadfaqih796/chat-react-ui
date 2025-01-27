import React from "react";
import { USER_LIST } from "./userDummy";

const ChatList = () => {
  const data = USER_LIST;
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ChatList;
