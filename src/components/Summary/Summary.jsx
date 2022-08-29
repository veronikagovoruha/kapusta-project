import { useDispatch, useSelector } from 'react-redux';
import styles from './Summary.module.css';
import translateMonths from '../../utils/options/translateMonths';
import * as selectors from '../../redux/monthStats/monthStatsSelectors';
import { useEffect } from 'react';
import {
  getExpenseTransactions,
  getIncomeTransactions,
} from '../../redux/transactions/transactionsSelectors';
import {
  getExpenseTransactionThunk,
  getIncomeTransactionThunk,
} from '../../redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Summary = () => {
  let arr = [];
  const location = useLocation();
  const dispatch = useDispatch();
  const expensesItems = useSelector(getExpenseTransactions);
  const incomeItems = useSelector(getIncomeTransactions);
  const expenses = useSelector(selectors.getExpenseMonthStats);
  const incomes = useSelector(selectors.getIncomeMonthStats);
  const currentDate = useRef(new Date().getMonth());

  useEffect(() => {
    dispatch(getExpenseTransactionThunk());
  }, [expensesItems.length, dispatch]);

  useEffect(() => {
    dispatch(getIncomeTransactionThunk());
  }, [incomeItems.length, dispatch]);

  switch (location.pathname) {
    case '/balance/expenses':
      arr = Object.entries(expenses);
      break;
    case '/balance/incomes':
      arr = Object.entries(incomes);
      break;
    default:
      return;
  }

  const filteredArray = arr.filter(
    (el1, index) => index <= currentDate.current
  );

  return (
    <div className={styles.summaryContainer}>
      <h4 className={styles.summaryTitle}>Summary</h4>
      <ul className={styles.summaryList}>
        {filteredArray.map(([el1, el2], index) => (
          <li key={index} className={styles.summaryItem}>
            <p>{`${translateMonths[el1].name}`}</p>
            <p className={styles.summaryDescription}>
              {el2 === 'N/A' ? '00' : el2}.00 UAH
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
