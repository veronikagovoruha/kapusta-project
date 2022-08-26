import sprite from '../../assets/icons/sprite.svg';
import styles from "./switcher.module.css"

const Switcher = (props) => {
    const {value, onChange} = props;
    return(
        <div className={styles.wrapper}>
            {props.label 
                ? <p className={styles.label}>{props.label}</p>
                : ''
            }
            <div className={styles.wrapperValue}>
            
                <svg className="icon" width="4" height="10" onClick={() => onChange(-1)}>
                    <use href={sprite + '#icon-arrow-left'}></use>
                </svg>

                <p className={styles.text}>{value}</p>

                <svg className="icon" width="4" height="10" onClick={() => onChange(1)}>
                    <use href={sprite + '#icon-icon-right'}></use>
                </svg>
            </div>
        </div>
        
    )
}

export default Switcher;

/*
***************************
*** Month switcher code ***
***************************

const [date, setDate] = useState(new Date());

const monthNames = useMemo(() => {
  return ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
  ]
}, []) ;

const monthHandler = (direction) => {
    setDate(new Date(date.setMonth(date.getMonth() + direction)));
}

const switcherMonthValue = `${monthNames[date.getMonth()]} ${date.getFullYear()}`


<Switcher value={switcherMonthValue} label="Current period" onChange={monthHandler}/>
*/
