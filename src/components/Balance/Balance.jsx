import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './balance.module.css';
import ReportsLink from 'components/ReportsLink';
import NumberFormat from 'react-number-format';
import { getUserBalance } from 'redux/userData/userDataSelectors';
import { addUserBalanceThunk } from 'redux/userData/userDataOperations';

const Balance = () => {
  const dispatch = useDispatch();
  const stateBalance = useSelector(getUserBalance);
  const balanceExists = stateBalance > 0;
  let [isTooltip, setIsTooltip] = useState(!balanceExists);
  let [balance, setBalance] = useState(balanceExists ? stateBalance : undefined); 


  const submitBalance = useCallback((balance) => {
        dispatch(addUserBalanceThunk({newBalance: balance}));
    }, [dispatch]);

  const handleBalanceInput = ({formattedValue, value}) => {
    setIsTooltip(!formattedValue > 0);
    setBalance(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitBalance(balance);
}

  return (
    <div className={styles.wrapper}>
        <ReportsLink />

      <div className={styles.wrapperBalance}>
        <p className={styles.text}>Balance: </p>
        <div className={styles.inputWrapper}>
            <form onSubmit={handleSubmit}>
                <NumberFormat
                    className={styles.input}
                    value={balance}
                    suffix={' UAH'}
                    thousandSeparator={" "}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    allowLeadingZeros={false}
                    decimalScale={2}
                    onValueChange={handleBalanceInput}
                    placeholder="0.00 UAH"
                />
                <button className={styles.button}>Confirm</button>
            </form>
           
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
