import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import s from './DatePicker.module.css';
import Icons from './Icons';
import { addDynamicDate } from '../../redux/dynamicData/dynamicDataActions';
import moment from 'moment';
import { useEffect } from 'react';

export default function CreateDatePicker({ children, getDate }) {
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
          getDate(date);
          dispatch(addDynamicDate(moment(date).format('YYYY-MM-DD')));
        }}
        dateFormat="dd.MM.yyyy"
      />
    </div>
  );
}
