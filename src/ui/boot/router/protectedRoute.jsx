import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = !!localStorage.getItem('authToken');
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
