import sprite from "../../sprite.svg";
import css from "./LogOut.module.css";

export default function LogOut() {
  return (
    <div>
      <svg className={css.out}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
      <p>Log out</p>
    </div>
  );
}
