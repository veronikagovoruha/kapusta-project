import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
} from '../../redux/transactions/transactionsOperations';
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

  const customStyles = {
    control: base => ({
      ...base,
      width: 280,
      height: 44,
      // marginRight: -2,
      borderRadius: 0,
      border: '0 solid #FFF',

      fontSize: 12,
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
      <input
        type="date"
        className={s.dateTransaction}
        name="date"
        value={date}
        required
        onChange={handleChangeInput}
      />
      <div className={s.wrapperInput}>
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
            location.pathname === '/balance/expenses'
              ? optionsExpenses
              : optionsIncomes
          }
          onChange={setSelectedOption}
          className={s.categorySelect}
          name="selectedOption"
          value={selectedOption}
          placeholder="Product category"
          styles={customStyles}
        />
        <div className={s.amountContainer}>
          <input
            type="number"
            className={s.amount}
            name="amount"
            value={amount}
            placeholder="0.00 UAH"
            pattern="^\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$"
            required
            onChange={handleChangeInput}
          />
          <svg className={s.icon} width="20" height="20">
            <use href={sprite + 'icon-calculator'}></use>
          </svg>
        </div>
      </div>
      <div className={s.btnContainer}>
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
