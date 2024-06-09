import css from "./CreateBoard.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";

export default function CreateBoard({ theme }) {
  const handleCreate = () => {
    console.log("create");
  };

  return (
    <div className={css.wrapper}>
      <p className={clsx(css.title, css[theme])}>My boards</p>
      <div className={clsx(css.create, css[theme])}>
        <p className={clsx(css.createText, css[theme])}>Create a new board</p>
        <button
          className={clsx(css.iconWrapper, css[theme])}
          onClick={handleCreate}
        >
          <svg className={clsx(css.icon, css[theme])}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
