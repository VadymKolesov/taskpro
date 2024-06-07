import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import css from "./LogOut.module.css";

const theme = 'light'

export default function LogOut() {
  return (
    <div className={css.div}>
      <svg className={clsx(css.out, css[theme])}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
      <p className={clsx(css.text, css[theme])}>Log out</p>
    </div>
  );
}
