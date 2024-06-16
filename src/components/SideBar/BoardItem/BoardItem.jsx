import css from "./BoardItem.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";

export default function BoardItem({ board }) {
  const theme = useSelector(selectTheme);

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
