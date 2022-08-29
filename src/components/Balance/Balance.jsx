import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { getUserBalance } from 'redux/userData/userDataSelectors';
import { addUserBalanceThunk } from 'redux/userData/userDataOperations';
import styles from './balance.module.css';

const Balance = () => {
  const dispatch = useDispatch();
  const stateBalance = useSelector(getUserBalance);
  const [isTooltip, setIsTooltip] = useState(stateBalance <= 0);
  const [balance, setBalance] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setBalance(stateBalance.toFixed(2).toString());
  }, [stateBalance]);

  const submitBalance = useCallback(
    balance => {
      dispatch(addUserBalanceThunk({ newBalance: Number(balance) }));
    },
    [dispatch]
  );

  const handleBalanceInput = ({ formattedValue, value }) => {
    if (value !== balance) {
      setIsTooltip(!formattedValue > 0);
      setBalance(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitBalance(balance);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperBalance}>
        <p className={styles.text}>Balance: </p>
        <div className={styles.inputWrapper}>
          <form onSubmit={handleSubmit}>
            <NumberFormat
              className={styles.input}
              value={balance}
              suffix={' UAH'}
              thousandSeparator={' '}
              fixedDecimalScale={true}
              allowNegative={false}
              allowLeadingZeros={false}
              decimalScale={2}
              onValueChange={handleBalanceInput}
              placeholder="0.00 UAH"
            />
            <MediaQuery maxWidth={1279}>
              {location.pathname === '/report' ? (
                <></>
              ) : (
                <button className={styles.button}>Confirm</button>
              )}
            </MediaQuery>
            <MediaQuery minWidth={1280}>
              <button className={styles.button}>Confirm</button>
            </MediaQuery>
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
