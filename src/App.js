import React, { useEffect, useState } from 'react';

import Login from './components/auth/Login';
import ChatLayout from './components/chats/ChatLayout';
import LoadingSpinner from './components/loading/LoadingSpinner';
import client from './feathers';

const Application = () => {
  const messagesService = client.service('messages');
  const usersService = client.service('users');
  const [login, setLogin] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log('maaaaaaaasuk', login);

  useEffect(() => {
    // Try to authenticate with the JWT stored in localStorage
    client
      .authenticate()
      .then(res => {
        console.log('ssssssssssss', res);
      })
      .catch(() => {
        setLoading(false);
        setLogin(null);
      });

    // On successfull login
    client.on('authenticated', loginResult => {
      // Get all users and messages
      Promise.all([
        messagesService.find({
          query: {
            $sort: { createdAt: -1 },
            $limit: 25,
          },
        }),
        usersService.find(),
      ]).then(([messagePage, userPage]) => {
        // We want the latest messages but in the reversed order
        const messagesResult = messagePage.data.reverse();
        console.log('ooooooooo', messagePage.data);
        const usersResult = userPage.data;

        // Once both return, update the state
        setLoading(false);
        setLogin(loginResult);
        setMessages(messagesResult);
        setUsers(usersResult);
      });
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on('logout', () => {
      setLogin(null);
      setMessages([]);
      setUsers([]);
    });

    // Add new messages to the message list
    messagesService.on('created', message =>
      setMessages(currentMessages => currentMessages.concat(message))
    );

    // Add new users to the user list
    usersService.on('created', user =>
      setUsers(currentUsers => currentUsers.concat(user))
    );
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  } else if (login) {
    return <ChatLayout messages={messages} users={users} />;
  }

  return <Login />;
};

export default Application;
