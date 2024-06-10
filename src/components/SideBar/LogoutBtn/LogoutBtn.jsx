import css from "./LogoutBtn.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import { getThemeStyle } from "../../../scripts/getThemeStyle";

export default function LogoutBtn() {
  const theme = getThemeStyle(css);

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
