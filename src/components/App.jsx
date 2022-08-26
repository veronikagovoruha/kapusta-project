import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUserThunk } from 'redux/userData/userDataOperations';
import AuthFormTest from './AuthFormTest/AuthFormTest';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <div>
      
      <AuthFormTest />
    </div>
  );
};

export default App;
