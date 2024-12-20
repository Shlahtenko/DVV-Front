import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import ProtectedRoute from './protectedRoute';
import { ERROR, LOGIN, PROFILE, REGISTER, VOTE } from './routes';

const Login = lazy(() => import('@pages/login'));
const Register = lazy(() => import('@pages/register'));
const Profile = lazy(() => import('@pages/profile'));
const Vote = lazy(() => import('@pages/vote'));
const Error = lazy(() => import('@pages/error'));

const router = createBrowserRouter([
  {
    path: PROFILE,
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: VOTE,
    element: (
      <ProtectedRoute>
        <Vote />
      </ProtectedRoute>
    ),
  },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: ERROR, element: <Error /> },
]);

export default router;
