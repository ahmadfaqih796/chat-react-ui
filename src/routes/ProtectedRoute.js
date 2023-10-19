import React, { useEffect, useState } from 'react';
import Login from '../components/auth/Login';
import client from '../feathers';
import LoadingSpinner from '../components/loading/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('maaaaaaaasuk', login);

  useEffect(() => {
    // Try to authenticate with the JWT stored in localStorage
    client.authenticate().catch(() => {
      setLoading(false);
      setLogin(null);
    });

    // On logout reset all all local state (which will then show the login screen)
    client.on('logout', () => {
      setLogin(null);
    });
  }, []);

  if (loading) {
    <LoadingSpinner />;
  } else if (login) {
    return children;
  }

  return <Login />;
};

export default ProtectedRoute;
