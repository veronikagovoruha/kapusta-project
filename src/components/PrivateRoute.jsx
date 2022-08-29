import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/authSelectors';
import {
  getExpenseTransactionThunk,
  getIncomeTransactionThunk,
} from 'redux/transactions/transactionsOperations';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import Loader from './Loader';

const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/balance/incomes') {
      dispatch(getIncomeTransactionThunk());
    } else {
      dispatch(getExpenseTransactionThunk());
    }
  }, [dispatch, location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? <Component /> : <Navigate to="/home" />}
    </Suspense>
  );
};

export default PrivateRoute;
