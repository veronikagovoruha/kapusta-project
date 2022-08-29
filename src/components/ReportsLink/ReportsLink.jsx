import { Link, useLocation } from 'react-router-dom';
import sprite from '../../assets/icons/sprite.svg';
import styles from './reports.module.css';

const ReportsLink = () => {
  const location = useLocation();
  return (
    <Link to={'/report'} state={location} className={styles.link}>
      <span data-text="Thanks" className={styles.textLink}>
        Reports
      </span>
      <svg className={styles.icon} width="24" height="24">
        <use href={sprite + '#icon-reports'}></use>
      </svg>
    </Link>
  );
};

export default ReportsLink;
