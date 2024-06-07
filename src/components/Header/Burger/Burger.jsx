import css from './Burger.module.css';
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

function Burger({ theme }) {
  // const theme = useSelector(selectTheme());
  const burger = clsx(css.burger, getThemaStyles(theme));

  const handleOpenSidebar = () => {
    console.log('Open sidebar');
  }
  
  return (
    <button className={burger} onClick={handleOpenSidebar}>
      <svg className={css.burgerIcon}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </button>
  )
}

export default Burger;