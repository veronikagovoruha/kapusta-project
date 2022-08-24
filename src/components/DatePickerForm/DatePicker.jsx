import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import s from './DatePicker.module.css';
import Icons from '../../Icons/Icons';

registerLocale('ru', ru);

export default function CreateDatePicker({children}) {
  const [startDate, setStartDate] = useState(new Date()
);

return(
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
      // onChangeTime(date);
    }}
    dateFormat="dd.MM.yyyy"
    locale="ru"
  />
</div>
);
}