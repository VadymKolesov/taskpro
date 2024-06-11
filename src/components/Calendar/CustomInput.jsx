import React from "react";
import css from "./Calendar.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

function formatDate(value) {
  if (value instanceof Date) {
    const today = new Date();
    const datePart = value.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    if (
      value.getFullYear() === today.getFullYear() &&
      value.getMonth() === today.getMonth() &&
      value.getDate() === today.getDate()
    ) {
      return `Today, ${datePart}`;
    }
    return value.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
  return value;
}

function CustomInput({ value, onClick }, ref) {
  const theme = "dark";
  return (
    <button
      className={clsx(css.customInput, css[theme])}
      onClick={onClick}
      ref={ref}
    >
      {formatDate(value)}
      <svg className={clsx(css.icon, css[theme])}>
        <use href={`${sprite}#icon-arrow-down`}></use>
      </svg>
    </button>
  );
}

const ForwardedCustomInput = React.forwardRef(CustomInput);

ForwardedCustomInput.displayName = "CustomInput";

export default ForwardedCustomInput;
