import { createBrowserRouter } from 'react-router-dom';
import Application from '../App';
import Chat from '../pages/Chat';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Application />,
    ErrorBoundary: null,
    errorElement: <h1>Error Gan</h1>,
  },
  // {
  //   path: '/chat/:id_receiver',
  //   element: <ProtectedRoute children={<Chat />} />,
  // },
]);

export default router;
