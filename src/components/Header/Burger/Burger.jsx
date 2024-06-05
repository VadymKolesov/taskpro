import css from './Burger.module.css';
import sprite from '../../../sprite.svg';

function Burger() {
  return (
    <button className={css.burger}>
      <svg className={css.burgerIcon}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </button>
  )
}

export default Burger;