import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';
import Icons from './Icons';

export default function CreateDatePicker({ children, getDate }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.calendarblock}>
      <label data-for="date" htmlFor="date">
        <Icons
          name="calendar"
          width={20}
          height={18}
          className={s.calendaricon}
        />
      </label>
      <DatePicker
        id="date"
        className={s.calendar}
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          getDate(startDate);
        }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
