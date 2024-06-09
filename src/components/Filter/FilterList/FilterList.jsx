import sprite from '../../../assets/sprite.svg';
import { getThemeStyle } from '../../../scripts/getThemeStyle';
import css from './FilterList.module.css';
import clsx from 'clsx';

function FilterList() {
  const filterList = clsx(css.filterList, getThemeStyle(css));
  // const colorLabel = clsx(css.colorLabel, filter !== 'all' ? css.active : '');

  const handleFilter = (event) => {
    if (event.target.value) {
      console.log(event.target.value);
    }
  }
  
  return (
    <ul className={filterList} onClick={handleFilter}>
      <li>
        <label className={css.colorLabel}>
          <input className={css.colorRadio} type="radio" name="filter" value="without" />
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
          <input className={css.colorRadio} type="radio" name="filter" value="low" />
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
          <input className={css.colorRadio} type="radio" name="filter" value="medium" />
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
          <input className={css.colorRadio} type="radio" name="filter" value="high" />
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
  )
}

export default FilterList;