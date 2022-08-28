import MediaQuery from 'react-responsive';
import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import DatePicker from '../components/DatePickerForm/DatePicker';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import ReportsLink from 'components/ReportsLink';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';
import { useState } from 'react';

const WorkSpacePage = () => {
  const [dateValue, setDateValue] = useState(new Date());

  const getDate = date => setDateValue(date);

  return (
    <Section>
      <Balance />
      <ReportsLink />
      <BalanceNavigation />
      <MediaQuery maxWidth={767}>
        <DatePicker getDate={getDate} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CategoryForm dateValue={dateValue} />
      </MediaQuery>
      <ExpensesTable />
    </Section>
  );
};

export default WorkSpacePage;
