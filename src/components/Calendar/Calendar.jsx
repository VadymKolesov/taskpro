import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ForwardedCustomInput from "./CustomInput";
import clsx from "clsx";
import "./Calendar.css";
import { CSSTransition } from "react-transition-group";

export default function Calendar() {
  const theme = "dark";
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const calendarRef = useRef(null);

  const handleSetDate = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const datepickerWrapper = clsx(
    "react-datepicker__custom-wrapper",
    theme && `${theme}`
  );

  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className={datepickerWrapper}>
      <ForwardedCustomInput onClick={handleInputClick} value={selectedDate} />
      <CSSTransition
        in={isCalendarOpen}
        timeout={300}
        classNames="calendar"
        unmountOnExit
        nodeRef={calendarRef}
      >
        <div className="calendar-wrapper" ref={calendarRef}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => handleSetDate(date)}
            dateFormat="eeee, MMMM d"
            inline
          />
        </div>
      </CSSTransition>
    </div>
  );
}
