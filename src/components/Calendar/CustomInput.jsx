import React from "react";
import css from "./Calendar.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { selectTheme } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { getThemeStyle } from "../../scripts/getThemeStyle";

function CustomInput({ value, onClick }, ref) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  return (
    <button
      className={clsx(css.customInput, theme)}
      onClick={onClick}
      ref={ref}
      type="button"
    >
      {value}
      <svg className={clsx(css.icon, theme)}>
        <use href={`${sprite}#icon-arrow-down`}></use>
      </svg>
    </button>
  );
}

const ForwardedCustomInput = React.forwardRef(CustomInput);

ForwardedCustomInput.displayName = "CustomInput";

export default ForwardedCustomInput;
