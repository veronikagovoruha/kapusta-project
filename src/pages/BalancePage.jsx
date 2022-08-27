// import { useState, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';

// import Switcher from 'components/Switcher';
import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ExpensesTable from 'components/ExpensesTable/ExpensesTable';
import BalanceNavigation from 'components/BalanceNavigation/BalanceNavigation';

const WorkSpacePage = () => {
  return (
    <Section>
      <Balance />
      <BalanceNavigation />
      {/* <Switcher value={switcherValue} onChange={switcherHandler}/> */}
      <CategoryForm />
      <ExpensesTable />
    </Section>
  );
};

export default WorkSpacePage;
