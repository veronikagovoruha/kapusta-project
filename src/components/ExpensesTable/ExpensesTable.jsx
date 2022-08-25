import s from './ExpensesTable.module.css';
import sprit from '../../assets/icons/sprite.svg';
// import { useSelector } from 'react-redux';

function ExpensesTable(props) {
  //   const date = useSelector();
  return (
    <div className={s.table}>
      <h3 className={s.categori}>
        <span className={s.dates}>Date</span>
        <span className={s.description}>Description</span>
        <span className={s.category}>category</span>
        <span className={s.sums}>Sum</span> <span></span>
      </h3>
      <ul className={s['inform-list']}>
        <li className={s.inform}>
          <span className={s.date}>05.09.2019</span>
          <span className={s.desc}>Моя зп</span>

          <span className={s.categ}>Зп</span>
          <span className={s.sum}>20 000.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>

        <li className={s.inform}>
          <span className={s.date}>05.09.2019</span>
          <span className={s.desc}>% на остаток на карте</span>

          <span className={s.categ}>Доп.доходы</span>
          <span className={s.sum}>500.00 грн.</span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
        <li className={s.inform}>
          <span className={s.date}></span>
          <span className={s.desc}></span>

          <span className={s.categ}></span>
          <span className={s.sum}></span>
          <button className={s.btn} type="button">
            <svg width="18" height="18">
              <use href={sprit + '#icon-delete'}></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ExpensesTable;
