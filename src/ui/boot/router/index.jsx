import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ERROR, HOME, LOGIN, PROFILE, REGISTER, SETTINGS } from './routes';

const Home = lazy(() => import('@pages/home'));
const Settings = lazy(() => import('@pages/settings'));
const Login = lazy(() => import('@pages/login'));
const Register = lazy(() => import('@pages/register'));
const Profile = lazy(() => import('@pages/profile'));
const Error = lazy(() => import('@pages/error'));

const routes = [
  {
    path: HOME,
    element: <Home />,
  },
  { path: SETTINGS, element: <Settings /> },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: PROFILE, element: <Profile /> },
  { path: ERROR, element: <Error /> },
];

const router = createBrowserRouter(routes);
export default router;
