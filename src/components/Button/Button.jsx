import css from "./Button.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

export default function Button({ text, isIcon, verticalPadding, type }) {
  const theme = "light";

  return (
    <>
      <button
        className={clsx(css.button, theme ? css[theme] : css.dark)}
        style={{ padding: `${verticalPadding} 0` }}
        type={type}
      >
        {isIcon && (
          <span className={clsx(css.iconWrapper, css[theme])}>
            <svg className={clsx(css.icon, css[theme])}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
        )}
        <p>{text}</p>
      </button>
    </>
  );
}
