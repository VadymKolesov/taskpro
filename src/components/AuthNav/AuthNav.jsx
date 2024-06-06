import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  return (
    <div className={css.form_header}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        to="/auth/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.isActive)}
        to="/auth/login"
      >
        Log In
      </NavLink>
    </div>
  );
}
