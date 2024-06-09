import clsx from 'clsx';
import css from './ThemeDropdown.module.css';
import sprite from '../../../assets/sprite.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { getThemeStyle } from '../../../scripts/getThemeStyle';

export default function ThemeDropdown() {
  const themeDropdown = clsx(css.themeDropdown, getThemeStyle(css));

  return (
    <div className={themeDropdown}>
      <button type="button" className={css.themeBtn}>
        Theme
        <svg className={css.arrow}>
          <use href={`${sprite}#icon-arrow-down`} />
        </svg>
      </button>
      <DropdownMenu/>
    </div>
  )
}