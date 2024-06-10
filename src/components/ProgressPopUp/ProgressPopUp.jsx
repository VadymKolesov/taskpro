import css from "./ProgressPopUp.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { getThemeStyle } from "../../scripts/getThemeStyle";

export default function AddColumnBtn({ columns }) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className={clsx(css.cont, theme)}>
      {columns.map((column) => (
        <button
          type="button"
          className={clsx(css.btn, theme)}
          onClick={handleClick}
          key={column._id}
        >
          <p>{column.name}</p>
          <svg className={clsx(css.icon, theme)}>
            <use href={`${sprite}#icon-move`}></use>
          </svg>
        </button>
      ))}
    </div>
  );
}
