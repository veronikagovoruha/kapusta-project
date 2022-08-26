import axios from 'axios';

const preparePeriodDataByTransaction = data => {
  const { total, ...transactions } = data;
  const transactionsData = Object.entries(transactions).map(
    ([description, total]) => ({
      description,
      total,
    })
  );
  return { total, transactionsData };
};

const prepareData = (data, typeData) => {
  const preparedData = Object.entries(data[typeData]).map(([type, data]) => {
    const transactions = preparePeriodDataByTransaction(data);
    return {
      type,
      transactions,
    };
  });
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
