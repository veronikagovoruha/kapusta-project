import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const BalancePage = lazy(() => import('pages/BalancePage'));
const ReportPage = lazy(() => import('pages/ReportPage'));

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/balance/"
          element={<PrivateRoute component={BalancePage} />}
        >
          <Route path="expenses" element={<></>} />
          <Route path="incomes" element={<></>} />
        </Route>
        <Route
          path="/report"
          element={<PrivateRoute component={ReportPage} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
