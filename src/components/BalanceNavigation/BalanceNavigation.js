import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import s from './BalanceNavigation.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navLink} ${s.activeNavLink}` : s.navLink;

const BalanceNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/balance/incomes') return;
    navigate('/balance/expenses');
  }, [location.pathname, navigate]);

  return (
    <div className={s.boxNav}>
      <MediaQuery maxWidth={767}>
        <NavLink to="/balance/expenses-mob" className={setActiveLinkClass}>
          expenses
        </NavLink>
        <div className={s.navButton}></div>
        <NavLink to="/balance/incomes-mob" className={setActiveLinkClass}>
          incomes
        </NavLink>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <NavLink to="/balance/expenses" className={setActiveLinkClass}>
          expenses
        </NavLink>
        <NavLink to="/balance/incomes" className={setActiveLinkClass}>
          incomes
        </NavLink>
      </MediaQuery>
    </div>
  );
};

export default BalanceNavigation;
