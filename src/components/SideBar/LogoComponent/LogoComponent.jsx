import css from "./LogoComponent.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";

const theme = 'light';

export default function LogoComponent() {
  return (
    <div className={css.logoComp}>
      <svg className={clsx(css.logo, css[theme])}>
        <use href={`${sprite}#${theme === "dark" || theme === "light" ? "icon-home-logo" : "icon-home-logo-violet"}`}></use>
      </svg>
      <p className={clsx(css.name, css[theme])}>Task Pro</p>
    </div>
  );
}
