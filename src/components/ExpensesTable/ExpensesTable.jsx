import s from './ExpensesTable.module.css';
import sprit from '../../assets/icons/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpenseTransactions,
  getIncomeTransactions,
} from 'redux/transactions/transactionsSelectors';
import { removeTransactionThunk } from 'redux/transactions/transactionsOperations';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Summary from 'components/Summary/Summary';
import translateOptions from '../../utils/options/translateOptions';
import { getDate } from 'redux/dynamicData/dynamicDataSelector';

function ExpensesTable() {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const dataExpenses = useSelector(getExpenseTransactions);
  const dataIncomes = useSelector(getIncomeTransactions);
  const date = useSelector(getDate);

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (location.pathname === '/balance/incomes') {
      setColor('grins');
      setCurrentData(dataIncomes);
    } else {
      setColor('red');
      setCurrentData(dataExpenses);
    }
  }, [dataExpenses, dataIncomes, location.pathname]);

  const removeTransaction = id => dispatch(removeTransactionThunk(id));

  const filterTransactionsByDate = () => {
    return currentData.filter(transaction => transaction.date.includes(date));
  };
  const fiteredTransactions = filterTransactionsByDate();

  return (
    <div className={s.flexBox}>
      <div className={s.table}>
        <h3 className={s.categori}>
          <span className={s.dates}>Date</span>
          <span className={s.description}>Description</span>
          <span className={s.category}>category</span>
          <span className={s.sums}>Sum</span> <span></span>
        </h3>
        <div className={s.container}>
          <ul className={s['inform-list']}>
            {fiteredTransactions.map(
              ({ amount, category, date, description, _id }) => (
                <li key={_id} className={s.inform}>
                  <div className={s['wrap-modil']}>
                    <span className={s['desc-mobil']}>{description}</span>

                    <div className={s.flex}>
                      <span className={s.date}>{date}</span>
                      <span className={s.desc}>{description}</span>
                      <span className={s.categ}>
                        {translateOptions[category].name}
                      </span>
                    </div>
                  </div>

                  <span className={s[color]}>{` ${
                    color === 'red' ? '-' : ''
                  } ${amount} UAH`}</span>
                  <button
                    className={s.btn}
                    type="button"
                    onClick={() => removeTransaction(_id)}
                  >
                    <svg width="18" height="18">
                      <use href={sprit + '#icon-delete'}></use>
                    </svg>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <Summary />
      {/* <div className={s.plugBox}></div> */}
    </div>
  );
}

export default ExpensesTable;
