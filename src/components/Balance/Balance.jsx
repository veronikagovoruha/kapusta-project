import { Link } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./balance.module.css"

const Balance = () => {
    return (
       <div className={styles.wrapper}>
            <Link to={"/"} className={styles.link}>
                <span className={styles.textLink}>Reports</span>
                <svg className={styles.icon} width="24" height ="24">
                    <use href={sprite + "#icon-reports"}>
                    </use>
                </svg>
            </Link>

            <div className={styles.wapperBalance}>
                <p className={styles.text}>Balance: </p>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="00.00 UAH"
                        pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
                    />
                    <button className={styles.button}>Confirm</button>
                </div>
            </div>
       </div>
    )
}

export default Balance;