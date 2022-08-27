// import ChartBar from 'components/chartBar/ChartBar';
import Expenses from 'components/Expenses/Expenses';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';
import ReportLink from 'components/ReportLink';
import Income from '../components/Income/Income';

const ReportPage = () => {
  const location = useLocation();

  return (
    <Section>
        <Link to={location.state ?? '/balance'} >
            <ReportLink />
        </Link>
      <Expenses />
      {/* <Income /> */}
    </Section>
  );
};

export default ReportPage;
