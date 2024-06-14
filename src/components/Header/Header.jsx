import Burger from "./Burger/Burger";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import Profile from "./Profile/Profile";
import clsx from "clsx";
import css from "./Header.module.css";
import { selectTheme } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setThemeDropDownOpen } from "../../redux/controls/slice";
import { selectIsThemeDropDownOpen } from "../../redux/controls/selectors";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";

export default function Header() {
  const isOpen = useSelector(selectIsThemeDropDownOpen);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const header = clsx(css.header, css[theme]);

  const handleClose = () => {
    isOpen && dispatch(setThemeDropDownOpen(false));
  };

  return (
    <header className={header}>
      <div className={css.container}>
        <Burger />
        <div className={css.profile}>
          <ClickOutsideComponent onClickOutside={handleClose}>
            <ThemeDropdown />
          </ClickOutsideComponent>
          <Profile />
        </div>
      </div>
    </header>
  );
}
