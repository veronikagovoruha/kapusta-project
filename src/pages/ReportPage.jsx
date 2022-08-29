import Expenses from 'components/Expenses/Expenses';
import Income from 'components/Income/Income';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';
import ReportLink from 'components/ReportLink';
import Switcher from '../components/Switcher/Switcher';
import { getPeriodDataThunk } from 'redux/periodData/periodDataOperations';
import MonthSummary from 'components/MonthSummary';
import Balance from 'components/Balance';
import {
  getPeriodDataTotalIncomes,
  getPeriodDataTotalExpenses,
} from 'redux/periodData/periodDataSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import styles from '../components/Balance/balance.module.css';

const ReportPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [switcherIndex, setSwitcherIndex] = useState(0);

  const incomes = useSelector(getPeriodDataTotalIncomes);
  const expenses = useSelector(getPeriodDataTotalExpenses);

  const monthNames = useMemo(() => {
    return [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER',
    ];
  }, []);

  const switcherNames = useMemo(() => {
    return ['expenses', 'incomes'];
  }, []);

  const monthHandler = direction => {
    setDate(new Date(date.setMonth(date.getMonth() + direction)));
  };

  useEffect(() => {
    dispatch(
      getPeriodDataThunk(
        `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}`
      )
    );
  }, [dispatch, date]);

  const switcherMonthValue = `${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;

  const switcherHandler = direction => {
    const newIndex = Math.abs(switcherIndex + direction) % 2;
    setSwitcherIndex(newIndex);
  };

  const switcherValue = switcherNames[switcherIndex];

  return (
    <Section>
      <div className={styles.BoxTabSwitch}>
        <Link to={location.state ?? '/balance'}>
          <ReportLink />
        </Link>
        <div className={styles.BoxSwitcher}>
          <Balance />
          <Switcher
            value={switcherMonthValue}
            label="Current period"
            onChange={monthHandler}
          />
        </div>
      </div>
      <MonthSummary incomes={incomes} expenses={expenses} />
      <Switcher value={switcherValue} onChange={switcherHandler} />
      {switcherValue === 'expenses' ? <Expenses /> : <Income />}
    </Section>
  );
};

export default ReportPage;
