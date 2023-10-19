import React from 'react';
import Sidebar from '../../layouts/Sidebar';
import { Grid } from '@mui/material';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useParams } from 'react-router-dom';

const ChatLayout = ({ users, messages }) => {
  const router = useParams();
  console.log('sssssss', router);
  return (
    <Grid container>
      <Grid item xs={3}>
        <Sidebar users={users} />
      </Grid>
      <Grid item xs={9}>
        <ChatMessage messages={messages} />
        <ChatInput />
      </Grid>
    </Grid>
  );
};

export default ChatLayout;
