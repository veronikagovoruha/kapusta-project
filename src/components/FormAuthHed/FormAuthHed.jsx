import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk, registerThunk } from 'redux/auth/authOperations';
import s from './FormAuthHed.module.css';

const AuthForm = () => {
  const dispatch = useDispatch();

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

    setEmail('');
    setPassword('');
    resetForm();
  };

  const handleSubmitLogIn = e => {
    e.preventDefault();

    dispatch(logInThunk({ email: email, password: password }));

    setEmail('');
    setPassword('');
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.box}>
      <form className={s.navForm}>
        <h2>You can log in with your Google Account:</h2>
        <button className={s.navForm__btnGoogle} type="submit">
          <svg></svg>
          <span> Google</span>
        </button>
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
