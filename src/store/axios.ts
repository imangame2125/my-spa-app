// src/store/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://193.151.144.67:1000',
});

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken'); // Retrieve the token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Add the token to headers
  } else {
    console.warn("No token found. Please log in again."); // Log a warning if no token is found
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
