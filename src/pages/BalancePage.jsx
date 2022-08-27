import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import ReportsLink from 'components/ReportsLink';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';

const WorkSpacePage = () => {
  return (
    <Section>
      <Balance />
      <ReportsLink />
      <BalanceNavigation />
      <CategoryForm />
      <ExpensesTable />
    </Section>
  );
};

export default WorkSpacePage;
