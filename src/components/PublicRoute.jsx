import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/authSelectors';
import Loader from './Loader';

const PublicRoute = ({ restricted = false, component: Component }) => {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Suspense fallback={<Loader />}>
      {isLoggedIn && restricted ? <Navigate to="/balance" /> : <Component />}
    </Suspense>
  );
};

export default PublicRoute;
