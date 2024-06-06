import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import css from "./WelcomePage.module.css";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={css.container}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        minDate={new Date()}
        calendarClassName={css.datepicker}
      />
    </div>
  );
}
