import css from './FilterBtn.module.css';
import sprite from '../../../assets/sprite.svg';
import clsx from 'clsx';

const getThemaStyles = (theme) => {
  switch (theme) {
    case 'light':
      return css.light;
    case 'violet':
      return css.violet;
    default:
      return '';
  }
}

function FilterBtn({ theme, isOpen, setIsOpen }) {
  //const theme = useSelector(selectTheme());
  const filterBtn = clsx(css.filterBtn, getThemaStyles(theme))
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