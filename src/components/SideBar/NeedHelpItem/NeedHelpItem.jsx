import css from "./NeedHelpItem.module.css";
import clsx from "clsx";
import cactus from "../../../assets/cactus.png";
import sprite from "../../../assets/sprite.svg";
import { useState } from "react";
import { getThemeStyle } from "../../../scripts/getThemeStyle";

export default function NeedHelpItem() {
  const theme = getThemeStyle(css);

  const [isHelpItemOpen, setIsHelpItemOpen] = useState(false);

  const handleNeedHelp = () => {
    console.log("help");
  };

  const handleOpen = () => {
    setIsHelpItemOpen(true);
  };

  const handleClose = () => {
    setIsHelpItemOpen(false);
  };

  return (
    <div
      className={clsx(css.wrapper, theme)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className={clsx(css.content, isHelpItemOpen && css.visible)}>
        <img src={cactus} />
        <p className={clsx(css.description, theme)}>
          If you need help with <span>TaskPro</span>, check out our support
          resources or reach out to our customer support team.
        </p>
      </div>
      <button
        type="button"
        className={clsx(css.btn, theme)}
        onClick={handleNeedHelp}
      >
        <svg className={clsx(css.icon, theme)}>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        <p>Need help?</p>
      </button>
    </div>
  );
}
