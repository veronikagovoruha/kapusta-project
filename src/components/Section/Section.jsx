import s from './Section.module.css';

const Section = ({ children }) => {
  const isAuth = true;

  return (
    <div className={!isAuth ? s.section : s.sectionAuth}>
      {!isAuth && (
        <>
          <h1 className={s.title}>Kapu&#36;ta</h1>
          <p className={s.subtitle}>Smart Finance</p>
        </>
      )}

      {children}
    </div>
  );
};

export default Section;
