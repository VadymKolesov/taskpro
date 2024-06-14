import css from "./LogoutBtn.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/operations";
import { selectTheme } from "../../../redux/auth/selectors";

export default function LogoutBtn() {
  const theme = useSelector(selectTheme);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className={clsx(css.btn, css[theme])} onClick={handleLogout}>
      <svg className={clsx(css.icon, css[theme])}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
      <p>Log out</p>
    </button>
  );
}
