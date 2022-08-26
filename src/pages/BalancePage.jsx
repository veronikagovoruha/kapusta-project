import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Switcher from 'components/Switcher';
import Section from 'components/Section/Section';
import Balance from 'components/Balance';
import CategoryForm from 'components/CategoryForm/CategoryForm';

const WorkSpacePage = () => {
  const navigate = useNavigate();

  const switcherNames = useMemo(() => {
    return ["expenses", "incomes"]
  }, []) ;

  const [switcherIndex, setSwitcherIndex] = useState(0);

  const switcherHandler = (direction) => {
    const newIndex = (Math.abs(switcherIndex + direction)) % 2;
    setSwitcherIndex(newIndex);
    navigate(`/balance/${switcherNames[newIndex]}`);
  }

  const switcherValue = switcherNames[switcherIndex];
  
  return (
    <Section>
      <Balance />
      <Switcher value={switcherValue} onChange={switcherHandler}/>
      <CategoryForm />
    </Section>
  );
};

export default WorkSpacePage;
