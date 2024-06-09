import css from "./BoardItem.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";

export default function BoardItem({ theme, board }) {
  const { name, iconName } = board;

  return (
    <div className={css.wrapper}>
      <svg className={clsx(css.icon, css[theme])}>
        <use href={`${sprite}#${iconName}`}></use>
      </svg>
      <p className={clsx(css.name, css[theme])}>{name}</p>
    </div>
  );
}
