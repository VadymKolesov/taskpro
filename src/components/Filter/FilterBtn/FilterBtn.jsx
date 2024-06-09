import css from './FilterBtn.module.css';
import sprite from '../../../assets/sprite.svg';
import clsx from 'clsx';
import { getThemeStyle } from '../../../scripts/getThemeStyle';

function FilterBtn({ theme, isOpen, setIsOpen }) {
  //const theme = useSelector(selectTheme());
  const filterBtn = clsx(css.filterBtn, getThemeStyle(theme, css));
  const switchModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <button className={filterBtn} onClick={switchModal}>
      <svg className={css.filterIcon}>
        <use href={`${sprite}#icon-filter`}></use>
      </svg>
      Filter
    </button>
  )
}

export default FilterBtn;