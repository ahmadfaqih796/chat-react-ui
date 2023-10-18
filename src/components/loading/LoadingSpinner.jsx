import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const LoadingSpinner = () => {
  return (
    <>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
        <Typography variant="h4" ml={3}>
          Loading...
        </Typography>
      </Box>
    </>
  );
};

export default LoadingSpinner;
