import FilterList from "./FilterList/FilterList";
import sprite from "../../assets/sprite.svg";
import css from "./FilterModal.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { changeFilter } from "../../redux/filter/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";

export default function FilterModal() {
  const userTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const theme = getThemeStyle(css, userTheme);

  function handleFilter() {
    dispatch(changeFilter(null));
  }

  function handleClose() {
    console.log("close");
  }

  return (
    <div className={clsx(css.wrapper, theme)}>
      <button className={css.closeModalBtn} type="button" onClick={handleClose}>
        <svg className={css.closeModalIcon}>
          <use href={`${sprite}#icon-x-close`}></use>
        </svg>
      </button>
      <p className={css.modalTitle}>Filters</p>
      <hr className={css.line} />
      <div className={css.filterWrapper}>
        <div>
          <p className={css.filterInputsTitle}>Label color</p>
          <FilterList />
        </div>
        <button className={css.showAllBtn} onClick={handleFilter}>
          Show all
        </button>
      </div>
    </div>
  );
}
