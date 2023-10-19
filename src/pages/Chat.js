import React from 'react';
import client from '../feathers';
import useFetch from '../hooks/useFetch';
import ChatInput from '../components/chats/ChatInput';

const Chat = () => {
  const { response } = useFetch('messages', {
    $sort: { createdAt: -1 },
    $limit: 25,
  });
  console.log(response);
  return (
    <>
      {JSON.stringify(response)}
      <p>Lsssssssssssss</p>
      <ChatInput />
      <button onClick={() => client.logout()} className="button button-primary">
        Sign Out
      </button>
    </>
  );
};

export default Chat;
