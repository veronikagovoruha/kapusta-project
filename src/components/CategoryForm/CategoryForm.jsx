import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import MediaQuery from 'react-responsive';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from '../../redux/transactions/transactionsOperations';
// import DatePicker from '../DatePickerForm/DatePicker';
import sprite from '../../assets/icons/sprite.svg';
import s from './CategoryForm.module.css';

import { useLocation } from 'react-router-dom';

const CategoryForm = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();

  const location = useLocation();

  const optionsExpenses = [
    { value: 'Транспорт', label: 'Transport' },
    { value: 'Продукты', label: 'Products' },
    { value: 'Здоровье', label: 'Health' },
    { value: 'Алкоголь', label: 'Alcohol' },
    { value: 'Развлечения', label: 'Entertainment' },
    { value: 'Всё для дома', label: 'Housing' },
    { value: 'Техника', label: 'Technique' },
    { value: 'Коммуналка и связь', label: 'Communal, communication' },
    { value: 'Спорт и хобби', label: 'Sports, hobbies' },
    { value: 'Образование', label: 'Education' },
    { value: 'Прочее', label: 'Other' },
  ];

  const optionsIncomes = [
    { value: 'З/П', label: 'Salary' },
    { value: 'Доп. доход', label: 'Extra earn' },
  ];

  const customStylesMobile = {
    control: base => ({
      ...base,
      width: 240,
      minHeight: 10,
      paddingLeft: 0,
      textAlign: 'left',
      border: 'none',
      backgroundColor: '#F5F6FB',
    }),
    indicatorSeparator: base => ({
      ...base,
      width: 0,
    }),
    placeholder: base => ({
      ...base,
      paddingLeft: 0,
      color: '#C7CCDC',
    }),
    container: base => ({
      ...base,
      paddingLeft: 18,
    }),
    valueContainer: base => ({
      ...base,
      paddingLeft: 0,
    }),
    input: base => ({
      ...base,
      marginLeft: 0,
      paddingLeft: 2,
    }),
  };

  const customStylesTablet = {
    control: base => ({
      ...base,
      width: 150,
      minHeight: 10,
      paddingLeft: 0,
      textAlign: 'left',
      border: 'none',
      backgroundColor: '#FFF',
    }),
    indicatorSeparator: base => ({
      ...base,
      width: 0,
    }),
    placeholder: base => ({
      ...base,
      paddingLeft: 0,
      color: '#C7CCDC',
    }),
    container: base => ({
      ...base,
      paddingLeft: 18,
    }),
    valueContainer: base => ({
      ...base,
      paddingLeft: 0,
    }),
    input: base => ({
      ...base,
      marginLeft: 0,
      paddingLeft: 2,
    }),
  };

  const transactionData = {
    description,
    amount,
    date,
    category: selectedOption.value,
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'selectedOption':
        setSelectedOption(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        break;
    }
  };

  const handleResetClick = () => {
    reset();

    console.log(transactionData);
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    if (selectedOption === '') {
      alert('Please choose Product category');
      return;
    }

    location.pathname === '/balance/expenses'
      ? dispatch(addExpenseTransactionThunk(transactionData))
      : dispatch(addIncomeTransactionThunk(transactionData));

    reset();

    console.log(transactionData);
  };

  const reset = () => {
    setDate('');
    setDescription('');
    setSelectedOption('');
    setAmount('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitClick}>
      <div className={s.inputWrapper}>
        {/* <DatePicker /> */}
        <input
          type="date"
          className={s.dateTransaction}
          name="date"
          value={date}
          required
          onChange={handleChangeInput}
        />
        <input
          type="text"
          className={s.descr}
          name="description"
          value={description}
          placeholder="Product description"
          required
          onChange={handleChangeInput}
        />
        <MediaQuery maxWidth={767}>
          <Select
            defaultValue={selectedOption}
            options={
              location.pathname === '/balance/expenses'
                ? optionsExpenses
                : optionsIncomes
            }
            onChange={setSelectedOption}
            className={s.categorySelect}
            name="selectedOption"
            value={selectedOption}
            placeholder="Product category"
            styles={customStylesMobile}
          />
          <div className={s.amountWrapper}>
            <input
              type="number"
              className={s.amount}
              name="amount"
              value={amount}
              placeholder="00.00 UAH"
              pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
              required
              onChange={handleChangeInput}
            />
            <div className={s.iconWrapper}>
              <svg className={s.icon} width="32" height="32">
                <use href={sprite + '#icon-calculator'}></use>
              </svg>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Select
            defaultValue={selectedOption}
            options={
              location.pathname === '/balance/expenses'
                ? optionsExpenses
                : optionsIncomes
            }
            onChange={setSelectedOption}
            className={s.categorySelect}
            name="selectedOption"
            value={selectedOption}
            placeholder="Product category"
            styles={customStylesTablet}
          />
          <div className={s.amountWrapper}>
            <input
              type="number"
              className={s.amount}
              name="amount"
              value={amount}
              placeholder="0.00"
              pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
              required
              onChange={handleChangeInput}
            />
            <div className={s.iconWrapper}>
              <svg className={s.icon} width="32" height="32">
                <use href={sprite + '#icon-calculator'}></use>
              </svg>
            </div>
          </div>
        </MediaQuery>
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
  );
};

export default CategoryForm;
