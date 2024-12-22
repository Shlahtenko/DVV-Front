import axiosInstance from './';

const PREFIX = '/vote';

export function getVotesByUserId(params) {
  return axiosInstance.get(`${PREFIX}/${params.id}`);
}

export function updateVotes(params) {
  return axiosInstance.patch(`${PREFIX}/${params.id}`, params);
}
