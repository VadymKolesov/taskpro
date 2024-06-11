import { useParams } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import css from "./ScreensPage.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";

export default function ScreensPage() {
  const { boardName } = useParams();
  const theme = useSelector(selectTheme);

  return (
    <div className={clsx(css.container, getThemeStyle(css, theme))}>
      <h2>Test icon</h2>
      <svg className={clsx(css.icon, getThemeStyle(css, theme))}>
        <use href={`${sprite}#icon-project-1`}></use>
      </svg>
      <h1>Screens Page. Board name: {boardName}</h1>
    </div>
  );
}
