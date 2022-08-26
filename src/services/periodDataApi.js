import axios from 'axios';



export const getPeriodDataApi = async period => {
  const { data } = await axios.get(`/transaction/period-data?date=${period}`);
  return data;
};
