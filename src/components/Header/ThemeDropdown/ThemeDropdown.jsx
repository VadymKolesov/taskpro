import clsx from 'clsx';
import css from './ThemeDropdown.module.css';
import sprite from '../../../sprite.svg';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

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

export default function ThemeDropdown({theme, setTheme}) {
  // const theme = useSelector(selectTheme);
  // const dispatch = useDispatch();
  const [isDrop, setIsDrop] = useState(false);
  const arrowIcon = clsx(css.arrow, isDrop ? css.up : '')
  const themeDropdown = clsx(css.themeDropdown, getThemaStyles(theme));

  const dropdownSwitch = () => {
    setIsDrop(!isDrop);
  }

  const selectTheme = (event) => {
    if (event.target !== event.currentTarget) {
      setTheme(event.target.dataset.theme);
      setIsDrop(!isDrop);
      // dispatch(changeTheme(setTheme));
    }
  }

  return (
    <div className={themeDropdown}>
      <button type="button" className={css.themeBtn} onClick={dropdownSwitch}>
        Theme
        <svg className={arrowIcon}>
          <use href={`${sprite}#icon-arrow-down`} />
        </svg>
      </button>
      <DropdownMenu theme={theme} selectTheme={selectTheme} isDrop={isDrop} />
    </div>
  )
}