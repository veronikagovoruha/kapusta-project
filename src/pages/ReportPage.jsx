import ChartBar from 'components/chartBar/ChartBar';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';

const ReportPage = () => {
  const location = useLocation();

  return (
    <Section>
      <Link to={location.state ?? '/balance'}>GO BACK</Link>
      <ChartBar />
    </Section>
  );
};

export default ReportPage;
