import css from "./AddColumnBtn.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";

export default function AddColumnBtn() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const handleClick = () => {
    console.log("hello");
  };

  return (
    <button
      className={clsx(css.btn, theme)}
      type="button"
      onClick={handleClick}
    >
      <div className={clsx(css.plusCont, theme)}>
        <svg className={clsx(css.plusIcon, theme)}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>
      Add another column
    </button>
  );
}
