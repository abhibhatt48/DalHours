import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
});

AxiosInstance.interceptors.request.use(async request => {
  if (request.url.endsWith('login')) return request;

  if (request.url.endsWith('register')) return request;
  if (request.url.endsWith('reset-password')) return request;

  const token = await AsyncStorage.getItem('token');
  request.headers.Authorization = `Bearer ${token}`;
  return request;
});

export default AxiosInstance;
