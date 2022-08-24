import { Link, NavLink } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./header.module.css"

const Header = () => {
    const isLogin = true;
    const user = "User";

    return (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <Link to={"/"} className={styles.logo}>
                    <svg className="icon" width="90" height="30">
                        <use href={sprite + "#icon-logo"}>
                        </use>
                    </svg>
                </Link>
            </div>
            
            {isLogin && <div className={styles.wrapperRigth}>
                <div className={styles.iconName}><p className={styles.user}>{user.charAt(0)}</p></div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.userName}>{user}</p>
                    </li>
                    <li className={styles.exit}>
                        <NavLink to="/logout">Exit</NavLink>
                    </li>
                </ul>
                <div>
                    <NavLink to="/logout" className={styles.logout}>
                        <svg className={styles.icon} width="16" height ="16">
                            <use href={sprite + "#icon-logout"}>
                            </use>
                        </svg>
                    </NavLink>
                </div>
            </div>}
            
        </div>
        
    )
}

export default Header;