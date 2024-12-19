import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ERROR, HOME, SETTINGS } from './routes';

const Home = lazy(() => import('@pages/home'));
const Settings = lazy(() => import('@pages/settings'));
const Error = lazy(() => import('@pages/error'));

const routes = [
  {
    path: HOME,
    element: <Home />,
  },
  { path: SETTINGS, element: <Settings /> },
  { path: ERROR, element: <Error /> },
];

const router = createBrowserRouter(routes);
export default router;
