import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutThunk } from 'redux/auth/authOperations';
import sprite from '../../assets/icons/sprite.svg';
import styles from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = true;
  const user = 'User';

  const handleLogOut = e => dispatch(logOutThunk());

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link to={'/'} className={styles.logo}>
          <svg className="icon" width="90" height="30">
            <use href={sprite + '#icon-logo'}></use>
          </svg>
        </Link>
      </div>

      {isLogin && (
        <div className={styles.wrapperRigth}>
          <div className={styles.iconName}>
            <p className={styles.user}>{user.charAt(0)}</p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.userName}>{user}</p>
            </li>
            <li className={styles.exit}>
              <button type="button" onClick={handleLogOut}>
                Exit
              </button>
            </li>
          </ul>
          <div>
            <button
              className={styles.logout}
              type="button"
              onClick={handleLogOut}
            >
              <svg className={styles.icon} width="16" height="16">
                <use href={sprite + '#icon-logout'}></use>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
