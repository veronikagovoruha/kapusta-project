import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  logInThunk,
  logOutThunk,
  registerThunk,
} from 'redux/auth/authOperations';

const AuthFormTest = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailLogIn, setEmailLogIn] = useState('');
  const [passwordLogIn, setPasswordLogIn] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleChangeLogIn = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmailLogIn(value);
    if (name === 'password') setPasswordLogIn(value);
  };

  const handleSubmitRegistration = e => {
    e.preventDefault();

    dispatch(registerThunk({ email, password }));

    setEmail('');
    setPassword('');
  };

  const handleSubmitLogIn = e => {
    e.preventDefault();

    dispatch(logInThunk({ email: emailLogIn, password: passwordLogIn }));

    setEmailLogIn('');
    setPasswordLogIn('');
  };

  const handleLogOut = e => dispatch(logOutThunk());

  return (
    <section>
      <form onSubmit={handleSubmitRegistration}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">REGISTRATION</button>
      </form>

      <form onSubmit={handleSubmitLogIn}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={emailLogIn}
            placeholder="example@mail.com"
            onChange={handleChangeLogIn}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={passwordLogIn}
            onChange={handleChangeLogIn}
          />
        </label>
        <button type="submit">LOGIN</button>
      </form>

      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </section>
  );
};

export default AuthFormTest;
