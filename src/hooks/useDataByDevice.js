const { useSelector } = require("react-redux");
const { useMediaQuery } = require("react-responsive");
const { useLocation } = require("react-router-dom");
const { getIncomeTransactions, getExpenseTransactions } = require("redux/transactions/transactionsSelectors");

const setTransactionColor = (transactions, color) => {
  return transactions.map(transaction => ({ ...transaction, color: color }));
};

export const useDataByDevice = () => {
  const location = useLocation();
  const dataExpenses = useSelector(getExpenseTransactions);
  const dataIncomes = useSelector(getIncomeTransactions);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  if (isMobile) {
    const incomes = setTransactionColor(dataIncomes, 'grins');
    const expenses = setTransactionColor(dataExpenses, 'red');
    return [...incomes, ...expenses];
  }
  return location.pathname === '/balance/incomes'
    ? setTransactionColor(dataIncomes, 'grins')
    : setTransactionColor(dataExpenses, 'red');
};
