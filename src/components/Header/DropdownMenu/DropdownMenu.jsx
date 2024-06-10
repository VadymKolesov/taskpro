import clsx from "clsx";
import css from "./DropdownMenu.module.css";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectIsThemeDropDownOpen } from "../../../redux/controls/selectors";
import { setThemeDropDownOpen } from "../../../redux/controls/slice";
import { changeTheme } from "../../../redux/auth/operations";
import { selectTheme } from "../../../redux/auth/selectors";

function DropdownMenu() {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsThemeDropDownOpen);
  const theme = useSelector(selectTheme);

  const handleChange = (e) => {
    dispatch(changeTheme({ theme: e.target.id }));
    dispatch(setThemeDropDownOpen());
  };

  const lightTheme = clsx(css.dropdownItem, theme === "light" && css.active);
  const darkTheme = clsx(css.dropdownItem, theme === "dark" && css.active);
  const violetTheme = clsx(css.dropdownItem, theme === "violet" && css.active);
  const dropdownWrap = clsx(css.dropdownWrap, getThemeStyle(css, theme));

  return (
    <div className={dropdownWrap}>
      <ul className={clsx(css.dropdown, isOpen && css.active)}>
        <li className={lightTheme} id="light" onClick={handleChange}>
          Light
        </li>
        <li className={darkTheme} id="dark" onClick={handleChange}>
          Dark
        </li>
        <li className={violetTheme} id="violet" onClick={handleChange}>
          Violet
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
