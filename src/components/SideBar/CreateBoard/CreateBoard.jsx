import css from "./CreateBoard.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { getThemeStyle } from "../../../scripts/getThemeStyle";

export default function CreateBoard() {
  const theme = getThemeStyle(css);

  const handleCreate = () => {
    console.log("create");
  };

  return (
    <div className={css.wrapper}>
      <p className={clsx(css.title, theme)}>My boards</p>
      <div className={clsx(css.create, theme)}>
        <p className={clsx(css.createText, theme)}>Create a new board</p>
        <button className={clsx(css.iconWrapper, theme)} onClick={handleCreate}>
          <svg className={clsx(css.icon, theme)}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
