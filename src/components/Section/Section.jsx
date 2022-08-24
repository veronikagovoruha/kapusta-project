import s from './Section.module.css';

const Section = ({ children }) => {
  // перемикач від якого залежить відображення фону
  const isAuth = false;

  return (
    <section className={!isAuth ? s.section : s.sectionAuth}>
      <div className={s.container}>
        {!isAuth && (
          <>
            <h1 className={s.title}>Kapu&#36;ta</h1>
            <p className={s.subtitle}>Smart Finance</p>
          </>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
