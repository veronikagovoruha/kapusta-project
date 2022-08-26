import styles from "./monthSummary.module.css"


const MonthSummary = () => {
    return (
        <div className={styles.wrapper}>
                <div className={styles.wrapperExpenses}>
                    <p className={styles.text}>Expenses:</p>
                    <span className={`${styles.value} ${styles.expenses}`}>-18 000.00 uah</span>
                </div>
                <div className={styles.wrapperIncome}>
                    <p className={styles.text}>Income:</p>
                    <span className={`${styles.value} ${styles.income}`}>+45 000.00 auh</span>
                </div>
            
        </div>
    )
}

export default MonthSummary;