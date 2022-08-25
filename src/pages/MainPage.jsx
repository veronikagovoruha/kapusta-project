import ChartBar from 'components/chartBar/ChartBar';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';
import MainPageLink from 'components/MainPageLink';

const ReportPage = () => {
  const location = useLocation();

  return (
    <Section>
        <Link to={location.state ?? '/balance'} >
            <MainPageLink />
        </Link>
      <ChartBar />
    </Section>
  );
};

export default ReportPage;
