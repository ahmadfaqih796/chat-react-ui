import { Grid } from '@mui/material';
import React from 'react';

import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import ChatMessage from '../components/chats/ChatMessage';
import ChatInput from '../components/chats/ChatInput';
import useFetch from '../hooks/useFetch';
import useSession from '../hooks/useSession';

const UserLayout = () => {
  const router = useParams();
  const { auth } = useSession();
  const { response: messages } = useFetch('messages', {
    $sort: { createdAt: -1 },
    $limit: 25,
  });
  const { response: users } = useFetch('users');
  console.log('vvvvvvvvvv', users);
  console.log('sssssss', router);
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar users={users} />
      </Grid>
      <Grid item xs={9}>
        <ChatMessage messages={messages} />
        <ChatInput
          session={{
            id: auth?.user.id,
            receiver: router.id_receiver,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default UserLayout;
