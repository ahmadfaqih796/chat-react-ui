import { createBrowserRouter } from 'react-router-dom';
import Application from '../App';
import UserLayout from '../layouts/UserLayout';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
    ErrorBoundary: null,
    errorElement: <h1>Error Gan</h1>,
  },
  {
    path: '/chat/:id_receiver',
    element: <ProtectedRoute children={<UserLayout />} />,
  },
]);

export default router;
