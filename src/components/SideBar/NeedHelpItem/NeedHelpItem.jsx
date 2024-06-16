import css from "./NeedHelpItem.module.css";
import clsx from "clsx";
import cactus from "../../../assets/cactus.png";
import sprite from "../../../assets/sprite.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import {
  setIsNeedHelpModalOpen,
  setSideBarOpen,
} from "../../../redux/controls/slice";

export default function NeedHelpItem() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const [isHelpItemOpen, setIsHelpItemOpen] = useState(false);

  const handleNeedHelp = () => {
    dispatch(setSideBarOpen(false));
    dispatch(setIsNeedHelpModalOpen(true));
  };

  const handleOpen = () => {
    setIsHelpItemOpen(true);
  };

  const handleClose = () => {
    setIsHelpItemOpen(false);
  };

  return (
    <div
      className={clsx(css.wrapper, css[theme])}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <div className={clsx(css.content, isHelpItemOpen && css.visible)}>
        <img src={cactus} />
        <p className={clsx(css.description, css[theme])}>
          If you need help with <span>TaskPro</span>, check out our support
          resources or reach out to our customer support team.
        </p>
      </div>
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
