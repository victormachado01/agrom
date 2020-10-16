/* eslint-disable no-param-reassign */
import axios from 'axios';
// import {useAuth} from '../contexts/Auth';

// const {getToken} = useAuth();

const api = axios.create({
  baseURL: 'http://192.168.1.140:8080/api/v1',
});

api.interceptors.request.use((config) => {
  // const token = getToken();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRFVzdWFyaW8iOjgsIm5vbWUiOiJjZWJvbGEiLCJlbWFpbCI6ImNlYm9sYUBlbWFpbC5jb20iLCJpYXQiOjE2MDI4MDgxMTIsImV4cCI6MTYwMzA2NzMxMn0.qXfJ4vjyr4YQQEKdKoZ5LgwgfTEBc456hVRQ9kZxLyw';

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
