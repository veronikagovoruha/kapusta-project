import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import styles from './balance.module.css';

const Balance = () => {
   const location = useLocation();
  let [isTooltip, setIsTooltip] = useState(true);

  const handleInput = ({ target }) => {
    setIsTooltip(!(target.value && target.value > 0));
  };

  return (
    <div className={styles.wrapper}>
      <Link to={'/report'} state={location} className={styles.link}>
        <span data-text="Thanks" className={styles.textLink}>
          Reports
        </span>
        <svg className={styles.icon} width="24" height="24">
          <use href={sprite + '#icon-reports'}></use>
        </svg>
      </Link>

      <div className={styles.wrapperBalance}>
        <p className={styles.text}>Balance: </p>
        <div className={styles.inputWrapper}>
          <input
            onInput={handleInput}
            className={styles.input}
            type="number"
            placeholder="00.00 UAH"
            pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
          />
          <button className={styles.button}>Confirm</button>
          {isTooltip ? <div className={styles.tooltipArrow}></div> : ''}
          {isTooltip ? (
            <div className={styles.tooltipContainment}>
              <p className={styles.tooltipMainText}>
                Hello! To get started, enter the current balance of your
                account!
              </p>
              <p className={styles.tooltipText}>
                You can't spend money until you have it :)
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Balance;
