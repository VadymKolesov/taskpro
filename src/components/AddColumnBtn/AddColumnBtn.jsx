import css from "./AddColumnBtn.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

export default function AddColumnBtn() {
  const theme = "violet";

  return (
    <button className={clsx(css.btn, css[theme])}>
      <div className={clsx(css.plusCont, css[theme])}>
        <svg className={clsx(css.plusIcon, css[theme])}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>
      Add another column
    </button>
  );
}
