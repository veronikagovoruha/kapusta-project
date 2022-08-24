import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const saveToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerApi = async userData => {
  const { data } = await axios.post('/auth/register', userData);
  logInApi(data);
  return data;
};

export const logInApi = async userData => {
  const { data } = await axios.post('/auth/login', userData);
  saveToken.set(data.accessToken);
  return data;
};

export const logOutApi = async () => {
  await axios.post('/auth/logout');
  saveToken.unset();
};


