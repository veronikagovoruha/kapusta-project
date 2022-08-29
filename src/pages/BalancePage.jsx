import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import ReportsLink from 'components/ReportsLink';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';
import s from '../components/CategoryForm/CategoryForm.module.css';
import styles from '../components/Balance/balance.module.css';

const WorkSpacePage = () => {
  return (
    <Section>
      <div className={styles.BalanceBox}>
        <Balance />
        <ReportsLink />
      </div>
      <div className={s.boxFixedForm}>
        <BalanceNavigation />
        <CategoryForm />
        <ExpensesTable />
      </div>
    </Section>
  );
};

export default WorkSpacePage;
