import axiosInstance from './';

const PREFIX = '/users';

export function getUsers(params) {
  return axiosInstance.get(`${PREFIX}/`, { params });
}

export function getUserById(params) {
  return axiosInstance.get(`${PREFIX}/${params.id}`);
}

export function updateUser(params) {
  return axiosInstance.patch(`${PREFIX}/${params._id}`, params);
}

//* No UI to be used with
// export function deleteUser(params) {
//   return axiosInstance.delete(`${PREFIX}/${params.userId}`);
// }
