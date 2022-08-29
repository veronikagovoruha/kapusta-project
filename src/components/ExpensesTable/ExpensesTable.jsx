import { useDispatch, useSelector } from 'react-redux';
import Summary from 'components/Summary/Summary';
import { removeTransactionThunk } from 'redux/transactions/transactionsOperations';
import translateOptions from '../../utils/options/translateOptions';
import { getDate } from 'redux/dynamicData/dynamicDataSelector';
import { useDataByDevice } from 'hooks/useDataByDevice';
import s from './ExpensesTable.module.css';
import sprit from '../../assets/icons/sprite.svg';

function ExpensesTable() {
  const dispatch = useDispatch();

  const date = useSelector(getDate);
  const transactions = useDataByDevice();

  const removeTransaction = id => dispatch(removeTransactionThunk(id));

  const filterTransactionsByDate = () => {
    return transactions.filter(transaction => transaction.date.includes(date));
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
              ({ amount, category, date, description, _id, color }) => (
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
    </div>
  );
}

export default ExpensesTable;
