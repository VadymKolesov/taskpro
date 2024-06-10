import css from "./AddColumnBtn.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";

export default function AddColumnBtn() {
  const theme = getThemeStyle(css);

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
