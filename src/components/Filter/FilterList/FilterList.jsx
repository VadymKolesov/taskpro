import { useDispatch, useSelector } from "react-redux";
import sprite from "../../../assets/sprite.svg";
import css from "./FilterList.module.css";
import clsx from "clsx";
import { selectFilterValue } from "../../../redux/filter/selectors";
import { changeFilter } from "../../../redux/filter/slice";
import { selectTheme } from "../../../redux/auth/selectors";

function FilterList() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <ul className={clsx(css.filterList, css[theme])}>
      <li>
        <label className={css.colorLabel}>
          <input
            className={css.colorRadio}
            type="radio"
            name="filter"
            value="without"
            checked={filterValue === "without"}
            onChange={handleChangeFilter}
          />
          <svg className={clsx(css.colorCustomRadioIcon, css.gray)}>
            <use href={`${sprite}#icon-circle`}></use>
          </svg>
          <svg className={clsx(css.colorCustomRadioIconChecked, css.gray)}>
            <use href={`${sprite}#icon-circle-radio`}></use>
          </svg>
          Without priority
        </label>
      </li>
      <li>
        <label className={css.colorLabel}>
          <input
            className={css.colorRadio}
            type="radio"
            name="filter"
            value="low"
            checked={filterValue === "low"}
            onChange={handleChangeFilter}
          />
          <svg className={clsx(css.colorCustomRadioIcon, css.blue)}>
            <use href={`${sprite}#icon-circle`}></use>
          </svg>
          <svg className={clsx(css.colorCustomRadioIconChecked, css.blue)}>
            <use href={`${sprite}#icon-circle-radio`}></use>
          </svg>
          Low
        </label>
      </li>
      <li>
        <label className={css.colorLabel}>
          <input
            className={css.colorRadio}
            type="radio"
            name="filter"
            value="medium"
            checked={filterValue === "medium"}
            onChange={handleChangeFilter}
          />
          <svg className={clsx(css.colorCustomRadioIcon, css.red)}>
            <use href={`${sprite}#icon-circle`}></use>
          </svg>
          <svg className={clsx(css.colorCustomRadioIconChecked, css.red)}>
            <use href={`${sprite}#icon-circle-radio`}></use>
          </svg>
          Medium
        </label>
      </li>
      <li>
        <label className={css.colorLabel}>
          <input
            className={css.colorRadio}
            type="radio"
            name="filter"
            value="high"
            checked={filterValue === "high"}
            onChange={handleChangeFilter}
          />
          <svg className={clsx(css.colorCustomRadioIcon, css.green)}>
            <use href={`${sprite}#icon-circle`}></use>
          </svg>
          <svg className={clsx(css.colorCustomRadioIconChecked, css.green)}>
            <use href={`${sprite}#icon-circle-radio`}></use>
          </svg>
          High
        </label>
      </li>
    </ul>
  );
}

export default FilterList;
