// import AuthFormTest from 'components/AuthFormTest/AuthFormTest';
import AuthForm from 'components/FormAuthHed/FormAuthHed';
import Section from 'components/Section/Section';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';

const HomePage = () => {
  // const [isDarkMode, setDarkMode] = React.useState(false);

  // const toggleDarkMode = checked => {
  //   setDarkMode(checked);
  // };
  return (
    <Section>
      {/* <DarkModeSwitch
        style={{ marginBottom: '2rem' }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={20}
        moonColor={'red'}
      /> */}
      {/* <AuthFormTest /> */}
      <AuthForm />
    </Section>
  );
};

export default HomePage;
