import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ForwardedCustomInput from "./CustomInput";
import clsx from "clsx";
import "./Calendar.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { addDays } from "date-fns";

export default function Calendar({ deadline, setDeadline }) {
  const theme = useSelector(selectTheme);

  const handleSetDate = (date) => {
    setDeadline(date.getTime());
  };

  const datepickerWrapper = clsx(
    "react-datepicker__custom-wrapper",
    theme && `${theme}`
  );

  return (
    <div className={datepickerWrapper}>
      <DatePicker
        selected={deadline}
        onChange={(date) => handleSetDate(date)}
        dateFormat="eeee, MMMM d"
        customInput={<ForwardedCustomInput />}
        minDate={addDays(new Date(), 0)}
      />
    </div>
  );
}
