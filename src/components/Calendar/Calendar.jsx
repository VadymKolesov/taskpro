import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ForwardedCustomInput from "./CustomInput";
import clsx from "clsx";
import "./Calendar.css";

export default function Calendar() {
  const theme = "dark";
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSetDate = (date) => {
    setSelectedDate(date);
    console.log(selectedDate.getTime());
  };

  const datepickerWrapper = clsx(
    "react-datepicker__custom-wrapper",
    theme && `${theme}`
  );

  return (
    <div className={datepickerWrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleSetDate(date)}
        dateFormat="eeee, MMMM d"
        customInput={<ForwardedCustomInput />}
      />
    </div>
  );
}
