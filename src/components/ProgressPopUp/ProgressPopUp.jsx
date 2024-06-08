import css from "./ProgressPopUp.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";

export default function AddColumnBtn({ columns }) {
  const theme = "dark";

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className={clsx(css.cont, css[theme])}>
      {columns.map((column) => (
        <button
          type="button"
          className={clsx(css.btn, css[theme])}
          onClick={handleClick}
          key={column.id}
        >
          <p>{column.name}</p>
          <svg className={clsx(css.icon, css[theme])}>
            <use href={`${sprite}#icon-move`}></use>
          </svg>
        </button>
      ))}
    </div>
  );
}
