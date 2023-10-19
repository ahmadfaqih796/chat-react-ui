import React from 'react';
import client from '../feathers';

const useSession = () => {
  const [auth, setAuth] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  console.log('authentication', auth);

  React.useEffect(() => {
    client
      .authenticate()
      .then(response => {
        setAuth(response);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setAuth(null);
      });
    client.on('logout', () => {
      setAuth(null);
    });
  }, []);
  return {
    auth,
    loading,
  };
};

export default useSession;
