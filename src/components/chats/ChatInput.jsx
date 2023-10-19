import React from 'react';
import client from '../../feathers';

const ChatInput = ({ session }) => {
  function sendMessage(ev) {
    const input = ev.target.querySelector('[name="text"]');
    const text = input.value.trim();

    if (text) {
      client
        .service('messages')
        .create({
          text: text,
          id_sender: session?.id,
          id_receiver: session?.receiver,
        })
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
