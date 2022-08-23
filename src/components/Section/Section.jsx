import s from './Section.module.css';

const Section = ({ children }) => {
  // перемикач від якого залежить відображення фону
  const isAuth = false;

  return (
    <div className={!isAuth ? s.section : s.sectionAuth}>
      {!isAuth && (
        <>
          <h1 className={s.title}>Kapu&#36;ta</h1>
          <p className={s.subtitle}>Smart Finance</p>
        </>
      )}
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default Section;
