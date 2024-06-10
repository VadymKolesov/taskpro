import css from "./BoardItem.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { getThemeStyle } from "../../../scripts/getThemeStyle";

export default function BoardItem({ board }) {
  const theme = getThemeStyle(css);

  const { name, iconName } = board;

  return (
    <div className={css.wrapper}>
      <svg className={clsx(css.icon, theme)}>
        <use href={`${sprite}#${iconName}`}></use>
      </svg>
      <p className={clsx(css.name, theme)}>{name}</p>
    </div>
  );
}
