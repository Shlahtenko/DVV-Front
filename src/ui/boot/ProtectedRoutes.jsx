import { Navigate } from 'react-router';

import { isAuthenticated } from './router/auth';

export const ProtectedRoute = ({ children }) => {
  const isUserAuthenticated = isAuthenticated();
  return isUserAuthenticated ? children : <Navigate to="/login" replace />;
};

export const AuthorizedRoute = ({ children }) => {
  const isUserAuthenticated = isAuthenticated();
  return isUserAuthenticated ? <Navigate to="/" replace /> : children;
  // return children;
};
