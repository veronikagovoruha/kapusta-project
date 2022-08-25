import sprite from '../../assets/icons/sprite.svg';
import styles from "./mainPageLink.module.css"

const MainPageLink = () => {
    return(
        <div className={styles.wrapper}>
            <svg className={styles.icon} width="24" height="24">
                <use href={sprite + '#icon-arrow-back'}></use>
            </svg>
            <p className={styles.text}>Main Page</p>
        </div>
        
    )
}

export default MainPageLink;