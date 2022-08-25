import { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './FormAuthHed.module.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // register === true
    //   ? cbSubmit({  email, password })
    //   : cbSubmit({ email, password });

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.box}>
      <form className={s.navForm} onSubmit={handleSubmit}>
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
          <button className={s.navForm__btn} type="submit">
            Log in
          </button>
          <button className={s.navForm__btn} type="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

// import TabForm from './TabForm/TabForm';
// import FormAuthHed from './FormAuthHed/FormAuthHed';
// import ModalPopUp from './ModalPopUp/ModalPopUp';
// <TabForm />
// <FormAuthHed />
// <ModalPopUp />

export default AuthForm;
