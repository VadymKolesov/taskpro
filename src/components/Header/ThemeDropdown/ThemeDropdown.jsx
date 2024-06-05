import clsx from 'clsx';
import css from './ThemeDropdown.module.css';
import sprite from '../../../sprite.svg';
import { useState } from 'react';

export default function ThemeDropdown() {
  const [isDrop, setIsDrop] = useState(false);
  const [theme, setTheme] = useState('dark'); //enum: ['light', 'dark', 'violet']
  const dropdown = clsx(css.dropdown, isDrop ? css.active : css.disable);
  const arrowIcon = clsx(css.arrow, isDrop ? css.up : '')
  const lightTheme = clsx(css.dropdownItem, theme === 'light' && css.active);
  const darkTheme = clsx(css.dropdownItem, theme === 'dark' && css.active);
  const violetTheme = clsx(css.dropdownItem, theme === 'violet' && css.active);

  const dropdownSwitch = () => {
    setIsDrop(!isDrop);
  }

  const selectTheme = (event) => {
    if (event.target !== event.currentTarget) {
      setTheme(event.target.dataset.theme);
      setIsDrop(!isDrop);
    }
  }

  return (
    <div className={css.themeDropdown}>
      <button type="button" className={css.themeBtn} onClick={dropdownSwitch}>
        Theme
        <svg className={arrowIcon}>
          <use href={`${sprite}#icon-arrow-down`} />
        </svg>
      </button>
      <div className={css.dropdownWrap}>
        <ul className={dropdown} onClick={selectTheme}>
          <li className={lightTheme} data-theme="light">Light</li>
          <li className={darkTheme} data-theme="dark">Dark</li>
          <li className={violetTheme} data-theme="violet">Violet</li>
        </ul>
      </div>
    </div>
  )
}