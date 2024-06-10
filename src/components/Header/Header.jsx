import Burger from "./Burger/Burger";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import Profile from "./Profile/Profile";
import clsx from "clsx";
import css from "./Header.module.css";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { selectTheme } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Header() {
  const theme = useSelector(selectTheme);
  const header = clsx(css.header, getThemeStyle(css, theme));

  return (
    <header className={header}>
      <div className={css.container}>
        <Burger />
        <div className={css.profile}>
          <ThemeDropdown />
          <Profile />
        </div>
      </div>
    </header>
  );
}
