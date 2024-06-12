import clsx from "clsx";
import css from "./ThemeDropdown.module.css";
import sprite from "../../../assets/sprite.svg";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { setThemeDropDownOpen } from "../../../redux/controls/slice";
import { selectIsThemeDropDownOpen } from "../../../redux/controls/selectors";
import { selectTheme } from "../../../redux/auth/selectors";

export default function ThemeDropdown() {
  const theme = useSelector(selectTheme);
  const isOpen = useSelector(selectIsThemeDropDownOpen);
  const dispatch = useDispatch();
  const themeDropdown = clsx(css.themeDropdown, getThemeStyle(css, theme));

  const handleOpen = () => {
    dispatch(setThemeDropDownOpen(!isOpen));
  };

  return (
    <div className={themeDropdown}>
      <button type="button" className={css.themeBtn} onClick={handleOpen}>
        Theme
        <svg className={css.arrow}>
          <use href={`${sprite}#icon-arrow-down`} />
        </svg>
      </button>
      <DropdownMenu />
    </div>
  );
}
