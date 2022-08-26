import s from './ExpensesTable.module.css';
import sprit from '../../assets/icons/sprite.svg';
import { useSelector } from 'react-redux';
import { getExpenseTransactions } from 'redux/transactions/transactionsSelectors';

function ExpensesTable(props) {
  const data = useSelector(getExpenseTransactions);
  console.log(data);

  return (
    <div className={s.table}>
      <h3 className={s.categori}>
        <span className={s.dates}>Date</span>
        <span className={s.description}>Description</span>
        <span className={s.category}>category</span>
        <span className={s.sums}>Sum</span> <span></span>
      </h3>
      <div className={s.container}>
        <ul className={s['inform-list']}>
          {data.map(({ amount, category, date, description, _id }) => (
            <li key={_id} className={s.inform}>
              <div className={s['wrap-modil']}>
                <span className={s['desc-mobil']}>{description}</span>

                <div className={s.flex}>
                  <span className={s.date}>{date}</span>
                  <span className={s.desc}>{description}</span>
                  <span className={s.categ}>{category}</span>
                </div>
              </div>
              <span className={s.sum}>{` - ${amount} грн`}</span>
              <button className={s.btn} type="button">
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
  );
}

export default ExpensesTable;
