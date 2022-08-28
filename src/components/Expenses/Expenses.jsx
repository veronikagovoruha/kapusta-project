import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Expenses.module.css';
import {getCurrentUserThunk} from '../../redux/userData/userDataOperations';
import sprite from "../../assets/icons/sprite.svg";
import translateOptions from '../../utils/options/translateOptions';
import ChartBar from '../chartBar/ChartBar';
import { useState } from "react";


const Expenses = () => {


    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCurrentUserThunk());
    }, [dispatch])


    const categories = useSelector(state=>state.periodData.expenses.expensesData)
//    console.log(categories);

   

   useEffect(()=>{
    if(categories.length !==0){
        const ar = categories[0]
        // console.log(ar);
        setChartData(ar.transactions.transactionsData
        )
    }
   },[categories])
        

    const [chartData, setChartData] = useState([])
    const [isActive, setIsActive] = useState(0)
  



    const handleClick = (dataForChart, index) => {
        setChartData(dataForChart)
        setIsActive(index)
    }

  

    return(
        <>
        <div className={s.wrapper}>
            {categories.length ===0 && <h2 className={s.warn}>You didn't enter data for this period</h2>}
            <ul className={s.list}>
                {categories.map((categorie, index)=>(
                    <li onClick={()=> handleClick( categorie.transactions.transactionsData, index)}  className={s.item} key={index}>
                        <p className={s.sum}>{categorie.transactions.total} uah</p>
                        <svg className={s.svg}
                        style={{
                            fill: 
                            index === isActive && ' #FF751D'
                        }
                        }>
                            <use 
                            href={sprite + `${translateOptions[categorie.type].icon}`}
                            ></use>
                        </svg>
                        <span className={s.span}
                        style={{
                            backgroundColor: 
                            index === isActive && '  #FFDAC0'
                        }
                        }
                        ></span>
                        <p className={s.categorieName}>{translateOptions[categorie.type].name}</p>
                    </li>
                ))}
            </ul>
        </div>
            {categories.length !==0 && <ChartBar dataForChart={chartData} />}
        </>
    )

}

export default Expenses