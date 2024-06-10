import Burger from './Burger/Burger';
import ThemeDropdown from './ThemeDropdown/ThemeDropdown';
import Profile from './Profile/Profile';
import clsx from 'clsx';
import css from './Header.module.css';
import { getThemeStyle } from '../../scripts/getThemeStyle';

export default function Header() {
  const header = clsx(css.header, getThemeStyle(css));
  
  return (
    <header className={header}>
      <div className={css.container}>
        <Burger/>
        <div className={css.profile}>
          <ThemeDropdown/>
          <Profile/>
        </div>
      </div>
    </header>
  )
}