import css from "./BoardItem.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";

export default function BoardItem({ board }) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

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
