import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import NumberFormat from 'react-number-format';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from '../../redux/transactions/transactionsOperations';
import DatePicker from '../DatePickerForm/DatePicker';
import { getDate } from '../../redux/dynamicData/dynamicDataSelector';
import {
  optionsExpenses,
  optionsIncomes,
} from '../../utils/options/transactionsCategoryOptions.js';
import {
  customStylesMobile,
  customStylesTablet,
} from '../../utils/options/selectStylesOptions';
import sprite from '../../assets/icons/sprite.svg';
import s from './CategoryForm.module.css';

const CategoryForm = () => {
  const date = useSelector(getDate);
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const location = useLocation();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktopOrTablet = useMediaQuery({ minWidth: 768 });

  const transactionData = {
    description,
    amount,
    date,
    category: selectedOption.value,
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'selectedOption':
        setSelectedOption(value);
        break;
      default:
        break;
    }
  };

  const handleChangeAmountInput = ({ value }) => {
    setAmount(parseFloat(value));
  };

  const handleResetClick = () => {
    reset();
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    if (selectedOption === '') {
      alert('Please choose Product category');
      return;
    }

    switch (location.pathname) {
      case '/balance/expenses':
        dispatch(addExpenseTransactionThunk(transactionData));
        break;
      case '/balance/expenses-mob':
        dispatch(addExpenseTransactionThunk(transactionData));
        break;
      case '/balance/incomes':
        dispatch(addIncomeTransactionThunk(transactionData));
        break;
      case '/balance/incomes-mob':
        dispatch(addIncomeTransactionThunk(transactionData));
        break;
      default:
        alert('Please choose Transaction category');
    }

    reset();
  };

  const reset = () => {
    setDescription('');
    setSelectedOption('');
    setAmount('');
  };

  return (
    <div className={s.formBox}>
      <form className={s.form} onSubmit={handleSubmitClick}>
        <div className={s.inputWrapper}>
          {!isMobile && <DatePicker />}
          <input
            type="text"
            className={s.descr}
            name="description"
            value={description}
            placeholder="Product description"
            required
            onChange={handleChangeInput}
          />
          <Select
            defaultValue={selectedOption}
            options={
              (location.pathname === '/balance/expenses' && optionsExpenses) ||
              (location.pathname === '/balance/expenses-mob' &&
                optionsExpenses) ||
              (location.pathname === '/balance/incomes' && optionsIncomes) ||
              (location.pathname === '/balance/incomes-mob' && optionsIncomes)
            }
            onChange={setSelectedOption}
            className={s.categorySelect}
            name="selectedOption"
            value={selectedOption}
            placeholder="Product category"
            styles={
              (isMobile && customStylesMobile) ||
              (isDesktopOrTablet && customStylesTablet)
            }
          />
          <div className={s.amountWrapper}>
            <NumberFormat
              className={s.amount}
              value={amount}
              suffix={' UAH'}
              thousandSeparator={' '}
              fixedDecimalScale={true}
              allowNegative={false}
              allowLeadingZeros={false}
              decimalScale={2}
              onValueChange={handleChangeAmountInput}
              placeholder="0.00 UAH"
              required
            />
            <div className={s.iconWrapper}>
              <svg className={s.icon} width="32" height="32">
                <use href={sprite + '#icon-calculator'}></use>
              </svg>
            </div>
          </div>
        </div>
        <div className={s.btnWrapper}>
          <button type="sudmit" className={s.btn}>
            Input
          </button>
          <button type="reset" className={s.btn} onClick={handleResetClick}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
