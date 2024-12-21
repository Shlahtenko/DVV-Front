import axiosInstance from './';

const PREFIX = '/auth';

export function createUser(params) {
  return axiosInstance.post(`${PREFIX}/register`, params);
}

export function loginUser(params) {
  return axiosInstance.post(`${PREFIX}/login`, params);
}
