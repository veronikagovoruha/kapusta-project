import axios from 'axios';

const prepareData = (data, typeData) => {
  const preparedData = Object.entries(data[typeData]).map(([type, data]) => ({
    type,
    ...data,
  }));
  let total = 0;
  if (typeData === 'incomesData') {
    total = data.incomeTotal;
  } else {
    total = data.expenseTotal;
  }

  return { total, preparedData };
};

export const getPeriodDataApi = async period => {
  const { data } = await axios.get(`/transaction/period-data?date=${period}`);
  const incomes = prepareData(data.incomes, 'incomesData');
  const expenses = prepareData(data.expenses, 'expensesData');
  return { incomes, expenses };
};
