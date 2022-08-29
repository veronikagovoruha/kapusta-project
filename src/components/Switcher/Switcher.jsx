import sprite from '../../assets/icons/sprite.svg';
import styles from './switcher.module.css';

const Switcher = props => {
  const { value, onChange } = props;
  return (
    <div className={styles.wrapper}>
      {props.label ? <p className={styles.label}>{props.label}</p> : ''}
      <div className={styles.wrapperValue}>
        <svg className={styles.icon} onClick={() => onChange(-1)}>
          <use href={sprite + '#icon-arrow-left'}></use>
        </svg>

        <p className={styles.text}>{value}</p>

        <svg className={styles.icon} onClick={() => onChange(1)}>
          <use href={sprite + '#icon-icon-right'}></use>
        </svg>
      </div>
    </div>
  );
};

export default Switcher;
