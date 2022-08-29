import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { addDynamicDate } from '../../redux/dynamicData/dynamicDataActions';
import Icons from './Icons';
import 'react-datepicker/dist/react-datepicker.css';
import s from './DatePicker.module.css';

export default function CreateDatePicker({ children }) {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addDynamicDate(moment(startDate).format('YYYY-MM-DD')));
  }, [dispatch, startDate]);

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
        }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
