import css from "./LogoComponent.module.css";
import sprite from "../../sprite.svg";

export default function LogoComponent() {
  return (
    <div className={css.logoComp}>
      <svg className={css.logo}>
        <use href={`${sprite}#icon-home-logo`}></use>
      </svg>
      <p className={css.name}>Task Pro</p>
    </div>
  );
}
