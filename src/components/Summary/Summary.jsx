import { useDispatch, useSelector } from 'react-redux';
import styles from './Summary.module.css';
import translateMonths from '../../utils/options/translateMonths';
import * as selectors from '../../redux/monthStats/monthStatsSelectors';
import { useEffect } from 'react';
import { getExpenseTransactions, getIncomeTransactions } from '../../redux/transactions/transactionsSelectors';
import { getExpenseTransactionThunk, getIncomeTransactionThunk} from '../../redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';



const Summary = () => {
  const dispatch=useDispatch();
  const expensesItems = useSelector(getExpenseTransactions);
  const incomeItems = useSelector(getIncomeTransactions);
  const expenses = useSelector(selectors.getExpenseMonthStats);
  const incomes = useSelector(selectors.getIncomeMonthStats); 

  useEffect(() => {
    dispatch(getExpenseTransactionThunk());
  }, [expensesItems.length,dispatch]
  )

  useEffect(() => {
    dispatch(getIncomeTransactionThunk());
  }, [incomeItems.length,dispatch]
  )

const location = useLocation();
let arr = [];

  switch (location.pathname) {
    case '/balance/expenses':
       arr = Object.entries(expenses);
      break;   
    case '/balance/incomes':
       arr = Object.entries(incomes);
      break;   
    default: 
    return 
;
  }

  return (
    <div className={styles.summaryContainer}>
      <h4 className={styles.summaryTitle}>Summary</h4>
      <ul className={styles.summaryList}>       
       {arr
      //  .filter(el => el[1] !== 'N/A')
       .map((el, index) => (
          <li key={index} className={styles.summaryItem}>
            <p className={styles.summaryDescription}>
              {`${translateMonths[el[0]].name}`}             
            </p>
            <p className={styles.summaryDescription}>{el[1]}</p>
          </li>
        ))}       
      </ul>
    </div>
  );
};

export default Summary;
