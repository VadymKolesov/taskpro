import sprite from "../../../assets/sprite.svg";
import css from "./CreateNewBoard.module.css";
import clsx from "clsx";

const theme = "light";

export default function CreateNewBoard() {
  return (
    <div className={clsx(css.div, css[theme])}>
      <p className={clsx(css.text, css[theme])}>Create a new board</p>
      <button className={clsx(css.btn, css[theme])}>
        <svg className={clsx(css.plus, css[theme])}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </button>
    </div>
  );
}
