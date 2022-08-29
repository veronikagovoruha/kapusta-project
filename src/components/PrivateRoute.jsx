import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import Loader from './Loader';

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn ? <Component /> : <Navigate to="/home" />}
    </Suspense>
  );
};

export default PrivateRoute;
