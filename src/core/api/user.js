import axiosInstance from './';

const PREFIX = '/users';

export function getUsers(params) {
  return axiosInstance.get(`${PREFIX}/`, { params });
}

export function createUser(params) {
  return axiosInstance.post(`${PREFIX}/`, params);
}

export function updateUser(params) {
  return axiosInstance.patch(`${PREFIX}/${params.id}`, {
    name: params.name,
  });
}

export function deleteUser(params) {
  return axiosInstance.delete(`${PREFIX}/${params.userId}`);
}
