import clsx from 'clsx';
import css from './DropdownMenu.module.css';

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

function DropdownMenu({ isDrop, selectTheme, theme }) {
  
  const dropdown = clsx(css.dropdown, isDrop ? css.active : css.disable);
  const lightTheme = clsx(css.dropdownItem, theme === 'light' && css.active);
  const darkTheme = clsx(css.dropdownItem, theme === 'dark' && css.active);
  const violetTheme = clsx(css.dropdownItem, theme === 'violet' && css.active);
  const dropdownWrap = clsx(css.dropdownWrap, getThemaStyles(theme));

  return (
    <div className={dropdownWrap}>
      <ul className={dropdown} onClick={selectTheme}>
        <li className={lightTheme} data-theme="light">Light</li>
        <li className={darkTheme} data-theme="dark">Dark</li>
        <li className={violetTheme} data-theme="violet">Violet</li>
      </ul>
    </div>
  )
}

export default DropdownMenu;