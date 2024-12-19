import axiosInstance from 'axios';

import { API_URL } from '@core/constants/index';

const axios = axiosInstance.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default axios;
