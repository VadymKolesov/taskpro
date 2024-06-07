import cactus1x from "../../../assets/SideBarCactus/cactus@1x.png";
import cactus2x from "../../../assets/SideBarCactus/cactus@2x.png";
import cactus3x from "../../../assets/SideBarCactus/cactus@3x.png";

import sprite from "../../../assets/sprite.svg";
import css from "./NeedHelp.module.css";
import clsx from "clsx";

const theme = "light";

export default function NeedHelp() {
  return (
    <div className={clsx(css.div, css[theme])}>
      <picture>
        <source srcSet={cactus3x} media="(min-resolution: 288dpi)" />
        <source srcSet={cactus2x} media="(min-resolution: 192dpi)" />
        <img className={css.image} src={cactus1x} alt="cactus" />
      </picture>
      <p className={clsx(css.text, css[theme])}>
        If you need help with <span className={clsx(css.span, css[theme])}>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button className={css.btn}>
        <svg className={clsx(css.help, css[theme])}>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        <p className={clsx(css.helpText, css[theme])}>Need help?</p>
      </button>
    </div>
  );
}
