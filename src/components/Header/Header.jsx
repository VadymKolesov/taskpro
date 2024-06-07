import css from './Header.module.css';
import Burger from './Burger/Burger';
import ThemeDropdown from './ThemeDropdown/ThemeDropdown';
import Profile from './Profile/Profile';
import { useState } from 'react';
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

export default function Header() {
  // const theme = useSelector(selectTheme);
  const [theme, setTheme] = useState('dark'); //enum: ['light', 'dark', 'violet']
  const header = clsx(css.header, getThemaStyles(theme));
  
  return (
    <header className={header}>
      <div className={css.container}>
        <Burger theme={theme}/>
        <div className={css.profile}>
          <ThemeDropdown theme={theme} setTheme={setTheme} />
          <Profile theme={theme}/>
        </div>
      </div>
    </header>
  )
}