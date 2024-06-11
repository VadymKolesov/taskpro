import css from "./LogoutBtn.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { selectTheme } from "../../../redux/auth/selectors";

export default function LogoutBtn() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className={clsx(css.btn, theme)} onClick={handleLogout}>
      <svg className={clsx(css.icon, theme)}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
      <p>Log out</p>
    </button>
  );
}
