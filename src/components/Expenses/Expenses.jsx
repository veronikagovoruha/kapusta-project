import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from './Expenses.module.css';
import {getCurrentUserThunk} from '../../redux/userData/userDataOperations';
import {getIncomeCategoriesThunk} from '../../redux/categories/categoriesOperations';
import {getExpenseCategoriesThunk} from '../../redux/categories/categoriesOperations';
import sprite from "../../assets/icons/sprite.svg";
import translateOptions from '../../utils/options/translateOptions';


const Expenses = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state=>state.categories.expense)


    useEffect(()=>{
        dispatch(getCurrentUserThunk());
        dispatch(getIncomeCategoriesThunk());
        dispatch(getExpenseCategoriesThunk())
    }, [dispatch])



    return(
        <>
        <div className={s.wrapper}>
            <ul className={s.list}>
                {categories.map((categorie, index)=>(
                    <li className={s.item} key={index}>
                        <p className={s.sum}>00.00</p>
                        <svg className={s.svg}>
                            <use 
                            href={sprite + `${translateOptions[categorie].icon}`}
                            ></use>
                        </svg>
                        <span className={s.span}></span>
                        <p className={s.categorieName}>{translateOptions[categorie].name}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )

}

export default Expenses