import axiosInstance from './';

const PREFIX = '/vote';

export function updateVotes(params) {
  return axiosInstance.patch(`${PREFIX}/${params.id}`, params);
}
