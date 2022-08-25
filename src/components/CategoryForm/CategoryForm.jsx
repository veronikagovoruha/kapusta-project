import React, { useState } from 'react';
import Select from 'react-select';
import s from './CategoryForm.module.css';

const CategoryForm = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [amount, setAmount] = useState('0.00');

  const options = [
    { value: 'transport', label: 'Transport' },
    { value: 'products', label: 'Products' },
    { value: 'health', label: 'Health' },
    { value: 'alcohol', label: 'Alcohol' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'housing', label: 'Housing' },
    { value: 'technique', label: 'Technique' },
    { value: 'communalCommunication', label: 'Communal, communication' },
    { value: 'sportsHobbies', label: 'Sports, hobbies' },
    { value: 'education', label: 'Education' },
    { value: 'other', label: 'Other' },
  ];

  const customStyles = {
    control: base => ({
      ...base,
      width: 169,
      height: 44,
      marginRight: -2,
      borderRadius: 0,
      border: '0 solid #FFF',
      fontSize: 12,
    }),
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

  const handleResetClick = e => {
    reset();

    console.log({ date, description, selectedOption, amount });
  };

  const handleSubmitClick = e => {
    e.preventDefault();

    if (selectedOption === '') {
      alert('Please choose Product category');
      return;
    }

    reset();

    console.log({ date }, { description }, { selectedOption }, { amount });
  };

  const reset = () => {
    setDate('');
    setDescription('');
    setSelectedOption('');
    setAmount('0.00');
  };

  return (
    <form className={s.form} onSubmit={handleSubmitClick}>
      {/* <input
        type="date"
        className={s.dateTransaction}
        name="date"
        value={date}
        required
        onChange={handleChangeInput}
      /> */}
      <div className={s.inputContainer}>
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
          options={options}
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
            min={0.01}
            step="0.01"
            required
            onChange={handleChangeInput}
          />
          <svg className={s.icon}>
            <use href="./images/icons.svg#icon-mail"></use>
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
