import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getPeriodDataThunk } from 'redux/periodData/periodDataOperations';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import Header from './Header';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const BalancePage = lazy(() => import('pages/BalancePage'));
const ReportPage = lazy(() => import('pages/ReportPage'));

const App = () => {
  const dispatch = useDispatch();

  const expenses = {
    total: 5200,
    incomesData: {
      Транспорт: {
        total: 4000,
        СТО: 3500,
        Мойка: 500,
      },
      'Всё для дома': {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
    },
  };

  const prepareData = data => {
    const dataType = Object.entries(data.incomesData).map(([type, data]) => ({
      type,
      ...data,
    }));
    const totalRes = data.total;
    console.log({ totalRes, totalRes });
    return { totalRes, totalRes };
  };

  prepareData(expenses);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
    dispatch(getPeriodDataThunk('2022-11'));
  }, [dispatch]);

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
