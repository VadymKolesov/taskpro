import css from "./NeedHelpItem.module.css";
import clsx from "clsx";
import cactus from "../../../assets/cactus.png";
import sprite from "../../../assets/sprite.svg";

export default function NeedHelpItem({ theme }) {
  const handleNeedHelp = () => {
    console.log("help");
  };

  return (
    <div className={clsx(css.wrapper, css[theme])}>
      <img src={cactus} />
      <p className={clsx(css.description, css[theme])}>
        If you need help with <span>TaskPro</span>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button
        type="button"
        className={clsx(css.btn, css[theme])}
        onClick={handleNeedHelp}
      >
        <svg className={clsx(css.icon, css[theme])}>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        <p>Need help?</p>
      </button>
    </div>
  );
}