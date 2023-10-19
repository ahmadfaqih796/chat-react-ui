import React from 'react';
import client from '../feathers';

const Chat = () => {
  return (
    <>
      <p>Lsssssssssssss</p>
      <button onClick={() => client.logout()} className="button button-primary">
        Sign Out
      </button>
    </>
  );
};

export default Chat;
