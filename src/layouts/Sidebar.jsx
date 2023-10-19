import {
  Grow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import client from '../feathers';

const Sidebar = ({ users }) => {
  const handlePush = (e, item) => {
    e.preventDefault();
    window.location.href = `/chat/${item}`;
  };
  return (
    <List
      sx={{
        maxHeight: 'calc(100vh - 170px)',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: 0,
        },
      }}
    >
      {users?.map(row => (
        <Grow in={true} key={row.id} timeout={500}>
          <ListItem
            onClick={e => {
              handlePush(e, row.id);
            }}
            sx={{
              background: theme => theme.palette.background.default,
              borderRadius: theme => theme.palette.borderRadius,
              mb: '1em',
            }}
          >
            <ListItemIcon>
              {/* <CustomImage src={row.photo} alt={row.name} margin="0" /> */}
            </ListItemIcon>
            <ListItemText
              // sx={{
              //   color: (theme) => theme.palette.text.secondary,
              // }}
              primary={row.name}
              secondary={'test chat gan !'}
            />
            <ListItemText
              primary={
                <Typography variant="body2" style={{ color: 'green' }}>
                  {/* {row.status ? "online" : "offline"} */}
                  Online
                </Typography>
              }
              align="right"
            ></ListItemText>
          </ListItem>
        </Grow>
      ))}
      <button onClick={() => client.logout()} className="button button-primary">
        Sign Out
      </button>
    </List>
  );
};

export default Sidebar;
