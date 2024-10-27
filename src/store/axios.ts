// src/store/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://193.151.144.67:1000', // Adjust base URL as necessary
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add the token to headers
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
