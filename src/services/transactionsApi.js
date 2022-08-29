import axios from 'axios';

export const addIncomeTransactionApi = async transaction => {
  const { data } = await axios.post('/transaction/income', transaction);
  return data;
};

export const getIncomeTransactionApi = async () => {
  const { data } = await axios.get('/transaction/income');
  return data;
};

export const addExpenseTransactionApi = async transaction => {
  const { data } = await axios.post('/transaction/expense', transaction);
  return data;
};

export const getExpenseTransactionApi = async () => {
  const { data } = await axios.get('/transaction/expense');
  return data;
};

export const removeTransactionApi = async id => {
  await axios.delete(`/transaction/${id}`);
  return id;
};
