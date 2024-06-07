import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './WelcomePage.module.css' // Підключаємо файл стилів
import ForwardedCustomInput from './CustomInput';
import clsx from 'clsx';

export default function CustomDatePicker ()  {
  const theme = "dark";
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className={css.container}>
      <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="eeee, MMMM d"
      customInput={<ForwardedCustomInput />}
      className={clsx(css.datePicker, css[theme])}
      calendarClassName={clsx(css.calendar, css[theme])}
      popperClassName={clsx(css.popper, css[theme])}
    />
    </div>
    
  );
}
