import MediaQuery from 'react-responsive';
import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import DatePicker from '../components/DatePickerForm/DatePicker';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import ReportsLink from 'components/ReportsLink';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';
import styles from '../components/Balance/balance.module.css';
import s from '../components/CategoryForm/CategoryForm.module.css';

const WorkSpacePage = () => {

  return (
    <Section>
      <div className={styles.BalanceBox}>
        <Balance />
        <ReportsLink />
      </div>
      <div className={s.boxFixedForm}>
        <BalanceNavigation />
        <MediaQuery maxWidth={767}>
          <DatePicker />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <CategoryForm />
        </MediaQuery>
        <ExpensesTable />
      </div>
    </Section>
  );
};

export default WorkSpacePage;
