import React from 'react';
import Sidebar from '../../layouts/Sidebar';
import { Grid } from '@mui/material';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatLayout = ({ users, messages }) => {
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
