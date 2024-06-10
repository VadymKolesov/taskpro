import React from "react";
import css from "./Calendar.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

function CustomInput({ value, onClick }, ref) {
  const theme = "dark";
  return (
    <button
      className={clsx(css.customInput, css[theme])}
      onClick={onClick}
      ref={ref}
    >
      {value}
      <svg className={clsx(css.icon, css[theme])}>
        <use href={`${sprite}#icon-arrow-down`}></use>
      </svg>
    </button>
  );
}

const ForwardedCustomInput = React.forwardRef(CustomInput);

ForwardedCustomInput.displayName = "CustomInput";

export default ForwardedCustomInput;
