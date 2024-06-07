import css from "./ProgressPopUp.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

export default function AddColumnBtn() {
  const theme = "violet";

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className={clsx(css.cont, css[theme])}>
      <button
        type="button"
        className={clsx(css.btn, css[theme])}
        onClick={handleClick}
      >
        <p>In progress</p>
        <svg className={clsx(css.icon, css[theme])}>
          <use href={`${sprite}#icon-move`}></use>
        </svg>
      </button>
      <button
        type="button"
        className={clsx(css.btn, css[theme])}
        onClick={handleClick}
      >
        <p>Done</p>
        <svg className={clsx(css.icon, css[theme])}>
          <use href={`${sprite}#icon-move`}></use>
        </svg>
      </button>
    </div>
  );
}
