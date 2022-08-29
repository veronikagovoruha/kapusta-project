import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import s from './Section.module.css';

const Section = ({ children }) => {
  // перемикач від якого залежить відображення фону
  const isAuth = useSelector(getLoggedIn);

  return (
    <section
      // className={s.boxSection}
      className={!isAuth ? s.boxSection : s.boxSectionAuth}
    >
      <div className={!isAuth ? s.section : s.sectionAuth}>
        {/* <div className={s.container}> */}
        {!isAuth && (
          <div>
            <h1 className={s.title}>Kapu&#36;ta</h1>
            <p className={s.subtitle}>Smart Finance</p>
          </div>
        )}
        {children}
        {/* </div> */}
      </div>
      <img src="" alt="" />
    </section>
  );
};

export default Section;
