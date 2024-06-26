import css from "./Card.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../../redux/board/operations";
import {
  setDeleteModalText,
  setIsAddCardOpen,
  setIsCardEdit,
  setIsConfirmCardDelete,
  setIsConfirmDeleteOpen,
  setIsProgressOpen,
} from "../../../redux/controls/slice";
import { setCurrentCard } from "../../../redux/card/slice";
import { selectTheme } from "../../../redux/auth/selectors";
import { selectColumns } from "../../../redux/board/selectors";
import { setCurrentColumn } from "../../../redux/column/slice";
import { useState } from "react";

function deadlineDateFormat(deadline) {
  const date = new Date(+deadline);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function deadlineAlarm(deadline) {
  const difference = deadline - Date.now();
  if (difference < 86400000 && difference > -86400000) {
    return "bell";
  } else if (difference < -86400000) {
    return "overdue";
  }
  return;
}

function Card({ card }) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const theme = useSelector(selectTheme);
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();

  function handleSwitchTextVisible(event) {
    if (event.target === event.currentTarget) {
      setIsTextVisible(!isTextVisible);
    }
  }

  function handleMove() {
    dispatch(setCurrentColumn({ _id: card.columnId }));
    dispatch(setIsProgressOpen(true));
    dispatch(setCurrentCard(card));
  }

  function handleUpdate() {
    dispatch(setIsAddCardOpen(true));
    dispatch(setIsCardEdit(true));
    dispatch(setCurrentCard(card));
  }

  function handleRemove() {
    dispatch(setCurrentCard(card));
    dispatch(setIsConfirmDeleteOpen(true));
    dispatch(setIsConfirmCardDelete(true));
    dispatch(setDeleteModalText(`Delete card "${card.title}"?`));
  }

  return (
    <div
      className={clsx(css.card, css[theme], isTextVisible && css.active)}
      onClick={handleSwitchTextVisible}
    >
      <div className={clsx(css.indicator, css[card.priority])}></div>
      <h3 className={css.title}>{card.title}</h3>
      <p className={css.description}>
        {card.description}
        <span className={css.cutDescription}>{card.description}</span>
      </p>
      <hr className={css.line} />
      <div className={css.cardInfo}>
        <ul className={css.infoList}>
          <li className={css.infoListItem}>
            <span>Priority</span>
            <p className={css.priority}>
              <svg className={clsx(css.priorityIcon, css[card.priority])}>
                <use href={`${sprite}#icon-circle`}></use>
              </svg>
              {card.priority}
            </p>
          </li>
          <li className={css.infoListItem}>
            <span>Deadline</span>
            <p>{deadlineDateFormat(card.deadline)}</p>
          </li>
        </ul>
        <div className={css.controlCont}>
          {deadlineAlarm(card.deadline) === "bell" ? (
            <div className={css.controlBtn}>
              <svg className={css.iconBell}>
                <use href={`${sprite}#icon-bell`}></use>
              </svg>
            </div>
          ) : deadlineAlarm(card.deadline) === "overdue" ? (
            <div className={css.controlBtn}>
              <svg className={css.iconOverdue}>
                <use href={`${sprite}#icon-x-close`}></use>
              </svg>
            </div>
          ) : null}
          <ul className={css.controlList}>
            {columns.length > 1 && (
              <li>
                <button
                  className={css.controlBtn}
                  type="button"
                  onClick={handleMove}
                >
                  <svg className={css.controlIcon}>
                    <use href={`${sprite}#icon-move`}></use>
                  </svg>
                </button>
              </li>
            )}
            <li>
              <button
                className={css.controlBtn}
                type="button"
                onClick={handleUpdate}
              >
                <svg className={css.controlIcon}>
                  <use href={`${sprite}#icon-pencil`}></use>
                </svg>
              </button>
            </li>
            <li>
              <button
                className={css.controlBtn}
                type="button"
                onClick={handleRemove}
              >
                <svg className={css.controlIcon}>
                  <use href={`${sprite}#icon-trash`}></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
