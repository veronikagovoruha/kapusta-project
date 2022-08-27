import axios from 'axios';
import { saveToken } from './authApi';

export const getCurrentUserApi = async persistedToken => {
  saveToken.set(persistedToken);
  const { data } = await axios.get('/user');
  return data;
};

export const addUserBalance = async balance => {
  const { data } = await axios.patch('/user/balance', balance);
  return data;
};
