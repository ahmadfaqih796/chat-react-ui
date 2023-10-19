import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import client from '../feathers';

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log('authentication', auth);

  useEffect(() => {
    client
      .authenticate()
      .then(res => {
        setAuth(res);
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

  if (loading) {
    return <LoadingSpinner />;
  } else if (auth) {
    return children;
  }
  return (window.location.href = '/');
};

export default ProtectedRoute;
