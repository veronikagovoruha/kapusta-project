import { Link, useLocation } from 'react-router-dom';
import Section from 'components/Section/Section';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import ReportLink from 'components/ReportLink';

const InputTransactionPage = () => {
  const location = useLocation();

  return (
    <Section>
      <Link to={location.state ?? '/balance'}>
        <ReportLink />
      </Link>
      <CategoryForm />
    </Section>
  );
};

export default InputTransactionPage;
