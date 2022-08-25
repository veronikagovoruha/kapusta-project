import ChartBar from 'components/chartBar/ChartBar';
import Section from 'components/Section/Section';
import { Link, useLocation } from 'react-router-dom';
import sprite from '../assets/icons/sprite.svg';

const ReportPage = () => {
  const location = useLocation();

  return (
    <Section>
        <Link to={location.state ?? '/balance'} >
        <svg className="icon" width="90" height="30">
            <use href={sprite + '#icon-arrow-back'}></use>
        </svg>
          Main Page
        </Link>
      <ChartBar />
    </Section>
  );
};

export default ReportPage;
