import css from './Header.module.css';
import Burger from './Burger/Burger';
import ThemeDropdown from './ThemeDropdown/ThemeDropdown';
import Profile from './Profile/Profile';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Burger/>
        <div className={css.profile}>
          <ThemeDropdown />
          <Profile/>
        </div>
      </div>
    </header>
  )
}