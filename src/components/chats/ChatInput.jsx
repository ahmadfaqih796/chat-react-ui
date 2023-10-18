import React, { useEffect, useRef } from 'react';
import client from '../../feathers';

const ChatInput = () => {
  const chatRef = useRef(null);

  function sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const text = input.value.trim();

    if (text) {
      client
        .service('messages')
        .create({ text })
        .then(() => {
          input.value = '';
        });
    }

    ev.preventDefault();
  }

  return (
    <form
      onSubmit={sendMessage.bind(this)}
      className="flex flex-row flex-space-between"
      id="send-message"
    >
      <input type="text" name="text" className="flex flex-1" />
      <button className="button-primary" type="submit">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
