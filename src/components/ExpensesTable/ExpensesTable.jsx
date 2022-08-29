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

function ExpensesTable() {
  const dispatch = useDispatch();
  const location = useLocation();
  const dataExpenses = useSelector(getExpenseTransactions);
  const dataIncomes = useSelector(getIncomeTransactions);

  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    if (location.pathname === '/balance/incomes') {
      setCurrentData(dataIncomes);
    } else {
      setCurrentData(dataExpenses);
    }
  }, [dataExpenses, dataIncomes, location.pathname]);

  const removeTransaction = id => dispatch(removeTransactionThunk(id));

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
            {currentData.map(({ amount, category, date, description, _id }) => (
              <li key={_id} className={s.inform}>
                <div className={s['wrap-modil']}>
                  <span className={s['desc-mobil']}>{description}</span>

                  <div className={s.flex}>
                    <span className={s.date}>{date}</span>
                    <span className={s.desc}>{description}</span>
                    <span className={s.categ}>{category}</span>
                  </div>
                </div>

                <span className={s.sum}>{` - ${amount} UAH`}</span>
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
            ))}

            {/* <div className={s['empty-line']}>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
            <li className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}></span>

                <div className={s.flex}>
                  <span className={s.date}></span>
                  <span className={s.desc}></span>
                  <span className={s.categ}></span>
                </div>
              </div>
              <span className={s.sum}></span>
              <button className={s.btn} type="button">
                <svg width="18" height="18">
                  <use href={sprit + '#icon-delete'}></use>
                </svg>
              </button>
            </li>
          </div> */}
          </ul>
        </div>
      </div>
      <Summary />
      {/* <div className={s.plugBox}></div> */}
    </div>
  );
}

export default ExpensesTable;
