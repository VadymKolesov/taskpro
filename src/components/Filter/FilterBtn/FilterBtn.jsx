import css from "./FilterBtn.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";

function FilterBtn() {
  const userTheme = useSelector(selectTheme);
  const filterBtn = clsx(css.filterBtn, getThemeStyle(css, userTheme));
  const handleOpenModal = () => {
    console.log("Filter modal is open");
  };
  return (
    <button className={filterBtn} onClick={handleOpenModal}>
      <svg className={css.filterIcon}>
        <use href={`${sprite}#icon-filter`}></use>
      </svg>
      Filter
    </button>
  );
}

export default FilterBtn;
