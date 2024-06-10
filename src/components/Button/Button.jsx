import css from "./Button.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";

export default function Button({ text, isIcon, verticalPadding, type }) {
  const theme = getThemeStyle(css);

  return (
    <>
      <button
        className={clsx(css.button, theme ? theme : css.dark)}
        style={{ padding: `${verticalPadding} 0` }}
        type={type}
      >
        {isIcon && (
          <span className={clsx(css.iconWrapper, theme)}>
            <svg className={clsx(css.icon, theme)}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
        )}
        <p>{text}</p>
      </button>
    </>
  );
}
