import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';
import CategoryForm from 'components/CategoryForm/CategoryForm';

const WorkSpacePage = () => {
  return (
    <Section>
      <Balance />
      <BalanceNavigation />
      <CategoryForm />
    </Section>
  );
};

export default WorkSpacePage;
