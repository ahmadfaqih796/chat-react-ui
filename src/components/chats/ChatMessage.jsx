import { Box, Typography } from '@mui/material';
import React from 'react';

const ChatMessage = ({ messages }) => {
  console.log(messages);
  return (
    <Box
      sx={{
        maxHeight: 'calc(100vh - 170px)',
        overflow: 'auto',
        //   '&::-webkit-scrollbar': {
        //     width: 0,
        //   },
      }}
    >
      {messages.map((item, index) => (
        <Box key={index} sx={{ background: 'salmon', mb: 2 }}>
          <Typography>{item.user_data?.name}</Typography>
          <Typography>{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChatMessage;
