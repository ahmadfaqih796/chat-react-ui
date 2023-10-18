import {
  Box,
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import React, { useState } from 'react';
import client from '../../feathers';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  function updateField(cb) {
    return ev => {
      cb(ev.target.value);
    };
  }

  const handleLogin = e => {
    e.preventDefault();
    return client
      .authenticate({
        strategy: 'local',
        email,
        password,
      })
      .catch(err => setError(err));
  };

  //   function signup() {
  //     return client
  //       .service('users')
  //       .create({ email, password })
  //       .then(() => handleLogin());
  //   }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'gray',
      }}
    >
      <Card sx={{ padding: 4, width: '300px' }}>
        <img
          src="http://feathersjs.com/img/feathers-logo-wide.png"
          alt="Feathers Logo"
          style={{ width: '100%', marginBottom: 3 }}
        />
        <p>{error && error.message}</p>
        <form onSubmit={e => handleLogin(e)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={updateField(setEmail)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            onChange={updateField(setPassword)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    <FeatherIcon
                      color="white"
                      icon={passwordVisible ? 'eye' : 'eye-off'}
                      width="20"
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default Login;
