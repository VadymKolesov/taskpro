import css from "./Card.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../../redux/board/operations";
import { setIsAddCardOpen, setIsCardEdit, setIsProgressOpen } from "../../../redux/controls/slice";
import { setCurrentCard } from "../../../redux/card/slice";
import { selectTheme } from "../../../redux/auth/selectors";
import { selectColumns } from "../../../redux/board/selectors";
import { setCurrentColumn } from "../../../redux/column/slice";

function deadlineDateFormat(deadline) {
  const date = new Date(+deadline);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function deadlineAlarm(deadline) {
  const difference = +deadline - Date.now();
  return difference < 86400000;
}

function Card({ card }) {
  const theme = useSelector(selectTheme)
  const columns = useSelector(selectColumns);
  const dispatch = useDispatch();
  
  function handleMove() {
    dispatch(setCurrentColumn({_id: card.columnId }))
    dispatch(setIsProgressOpen(true));
    dispatch(setCurrentCard(card));
  }

  function handleUpdate() {
    dispatch(setIsAddCardOpen(true));
    dispatch(setIsCardEdit(true));
    dispatch(setCurrentCard(card));
  }

  function handleRemove() {
    dispatch(removeCard({ cardId: card._id }));
  }

  return (
    <div className={clsx(css.card, css[theme])}>
      <div className={clsx(css.indicator, css[card.priority])}></div>
      <h3 className={css.title}>{card.title}</h3>
      <p className={css.description}>{card.description}</p>
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
          {deadlineAlarm(card.deadline) && <button
            className={css.controlBtn}
            type="button"
            >
              <svg className={css.iconBell}>
                <use href={`${sprite}#icon-bell`}></use>
              </svg>
          </button>}
          <ul className={css.controlList}>
            {columns.length > 1 && <li>
              <button
                className={css.controlBtn}
                type="button"
                onClick={handleMove}
              >
                <svg className={css.controlIcon}>
                  <use href={`${sprite}#icon-move`}></use>
                </svg>
              </button>
            </li>}
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
  )
}

export default Card;