import { Navigate } from 'react-router';

import { isAuthenticated } from './router/auth';
import { LOGIN, PROFILE } from './router/routes';

export const ProtectedRoute = ({ children }) => {
  const isUserAuthenticated = isAuthenticated();
  return isUserAuthenticated ? children : <Navigate to={LOGIN} replace />;
};

export const AuthorizedRoute = ({ children }) => {
  const isUserAuthenticated = isAuthenticated();
  return isUserAuthenticated ? <Navigate to={PROFILE} replace /> : children;
};
