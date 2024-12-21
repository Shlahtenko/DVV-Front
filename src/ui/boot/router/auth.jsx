import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return false;
  }
  // console.log(token);
  return true;
};

export const saveToken = (jwtToken) => {
  localStorage.setItem('jwt', jwtToken);
};

export const getUserIdFromToken = () => {
  const token = localStorage.getItem('jwt');
  if (!token) {
    return null;
  }
  return jwtDecode(token).userId;
};

export const clearToken = () => {
  localStorage.removeItem('jwt');
};
