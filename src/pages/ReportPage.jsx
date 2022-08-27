import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ChartBar from 'components/chartBar/ChartBar';
import Expenses from 'components/Expenses/Expenses';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';
import ReportLink from 'components/ReportLink';
import Income from '../components/Income/Income';
import Switcher from '../components/Switcher/Switcher';
import { getPeriodDataThunk } from 'redux/periodData/periodDataOperations';
import MonthSummary from 'components/MonthSummary';
import Balance from 'components/Balance';
import { getPeriodDataTotalIncomes, getPeriodDataTotalExpenses } from "redux/periodData/periodDataSelectors";

const ReportPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const incomes = useSelector(getPeriodDataTotalIncomes)
  const expenses = useSelector(getPeriodDataTotalExpenses)

  const monthNames = useMemo(() => {
    return ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ]
  }, []) ;

  const monthHandler = (direction) => {
      setDate(new Date(date.setMonth(date.getMonth() + direction)));
  }

  useEffect(() => {
    dispatch(getPeriodDataThunk(`${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}`));
  }, [dispatch, date]);

  const switcherMonthValue = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  return (
    <Section>
      <Link to={location.state ?? '/balance'} >
          <ReportLink />
      </Link>
      <Balance />
      <Switcher value={switcherMonthValue} label="Current period" onChange={monthHandler}/>
      <MonthSummary incomes={incomes} expenses={expenses}/>
      <Expenses />
      <Income />
      <ChartBar />
    </Section>
  );
};

export default ReportPage;
