import axios from 'axios';

export const getIncomeCategoriesApi = async () => {
  const { data } = await axios.get('/transaction/income-categories');
  return data;
};

export const getExpenseCategoriesApi = async () => {
  const { data } = await axios.get('/transaction/expense-categories');
  return data;
};
