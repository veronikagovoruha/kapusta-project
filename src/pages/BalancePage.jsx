import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';

const WorkSpacePage = () => {
  return (
    <Section>
      <Balance />
      <BalanceNavigation />
      <CategoryForm />
      <ExpensesTable />
    </Section>
  );
};

export default WorkSpacePage;
