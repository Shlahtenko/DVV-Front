import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '@components/Layout';

import { ERROR, HOME, SETTINGS } from './routes';

const Home = lazy(() => import('@pages/home'));
const Settings = lazy(() => import('@pages/settings'));
const Error = lazy(() => import('@pages/error'));

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      { path: SETTINGS, element: <Settings /> },
      { path: ERROR, element: <Error /> },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
