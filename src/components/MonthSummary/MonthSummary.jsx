import styles from './monthSummary.module.css';

const MonthSummary = ({ incomes, expenses }) => {
  const incomesValue = incomes === 0 ? `${incomes} UAH` : `+ ${incomes} UAH`;
  const expensesValue =
    expenses === 0 ? `${expenses} UAH` : `- ${expenses} UAH`;
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperExpenses}>
        <p className={styles.text}>Expenses:</p>
        <span className={`${styles.value} ${styles.expenses}`}>
          {expensesValue}
        </span>
      </div>
      <div className={styles.wrapperIncome}>
        <p className={styles.text}>Income:</p>
        <span className={`${styles.value} ${styles.income}`}>
          {incomesValue}
        </span>
      </div>
    </div>
  );
};

export default MonthSummary;
