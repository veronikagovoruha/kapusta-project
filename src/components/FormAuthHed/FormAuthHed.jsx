import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInThunk, registerThunk } from 'redux/auth/authOperations';
import { getLoggedIn, getRegistered } from 'redux/auth/authSelectors';
import s from './FormAuthHed.module.css';

const AuthForm = () => {
  const dispatch = useDispatch();

  const isRegistered = useSelector(getRegistered);
  const isLoggedIn = useSelector(getLoggedIn);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmitRegistration = e => {
    e.preventDefault();

    dispatch(registerThunk({ email, password }));
  };

  const handleSubmitLogIn = e => {
    e.preventDefault();

    dispatch(logInThunk({ email: email, password: password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (isRegistered && !isLoggedIn && email && password) {
      dispatch(logInThunk({ email: email, password: password }));
      resetForm();
    }
  }, [dispatch, email, isLoggedIn, isRegistered, password]);

  return (
    <div className={s.box}>
      <form className={s.navForm}>
        <h2>You can log in with your Google Account:</h2>
        <a
          className={s.navForm__btnGoogle}
          href="https://kapusta-backend.goit.global/auth/google"
        >
          <svg></svg>
          <span> Google</span>
        </a>
        <p>Or log in using an email and password, after registering:</p>

        <label className={s.label}>
          Email:
          <input
            className={s.input}
            type="text"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password:
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={s.boxButton}>
          <button
            className={s.navForm__btn}
            type="submit"
            onClick={handleSubmitLogIn}
          >
            Log in
          </button>
          <button
            className={s.navForm__btn}
            type="submit"
            onClick={handleSubmitRegistration}
          >
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
