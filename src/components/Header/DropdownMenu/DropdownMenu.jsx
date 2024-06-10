import clsx from 'clsx';
import css from './DropdownMenu.module.css';
import { getThemeStyle } from '../../../scripts/getThemeStyle';

function DropdownMenu() {
  const theme = 'dark';
  const lightTheme = clsx(css.dropdownItem, theme === 'light' && css.active);
  const darkTheme = clsx(css.dropdownItem, theme === 'dark' && css.active);
  const violetTheme = clsx(css.dropdownItem, theme === 'violet' && css.active);
  const dropdownWrap = clsx(css.dropdownWrap, getThemeStyle(css));

  return (
    <div className={dropdownWrap}>
      <ul className={css.dropdown}>
        <li className={lightTheme} data-theme="light">Light</li>
        <li className={darkTheme} data-theme="dark">Dark</li>
        <li className={violetTheme} data-theme="violet">Violet</li>
      </ul>
    </div>
  )
}

export default DropdownMenu;