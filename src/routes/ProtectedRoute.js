import React from 'react';
import LoadingSpinner from '../components/loading/LoadingSpinner';
import useSession from '../hooks/useSession';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useSession();
  if (loading) {
    return <LoadingSpinner />;
  } else if (auth) {
    return children;
  }
  return (window.location.href = '/');
};

export default ProtectedRoute;
