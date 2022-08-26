import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
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
    <div>
      <NavLink to="/balance/expenses" className={setActiveLinkClass}>
        expenses
      </NavLink>
      <NavLink to="/balance/incomes" className={setActiveLinkClass}>
        incomes
      </NavLink>
    </div>
  );
};

export default BalanceNavigation;
