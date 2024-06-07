import sprite from "../../../assets/sprite.svg";
import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Board.module.css";

export default function Board({ board, isChosen }) {
  // Overflow вик. на board якщо вона обрана

  // isChosen = false;

  const theme = "light";

  const { iconName, iconText } = board;

  return (
    <div
      className={clsx(`${css.div} ${isChosen ? css.chosen : ""}`, css[theme])}
    >
      <svg
        className={clsx(
          `${css.icon} ${isChosen ? css.chosen : ""}`,
          css[theme]
        )}
      >
        <use href={`${sprite}#${iconName}`}></use>
      </svg>
      <p
        className={clsx(
          `${css.text} ${isChosen ? css.chosen : ""}`,
          css[theme]
        )}
      >
        {iconText}
      </p>
      {isChosen && (
        <>
          <ul className={css.opIconsWrapper}>
            <li>
              <button className={css.btn}>
                <svg className={clsx(css.op, css[theme])}>
                  <use href={`${sprite}#icon-pencil`}></use>
                </svg>
              </button>
            </li>
            <li>
              <button className={css.btn}>
                <svg className={clsx(css.op, css[theme])}>
                  <use href={`${sprite}#icon-trash`}></use>
                </svg>
              </button>
            </li>
          </ul>
          <div className={clsx(css.stroke, css[theme])}></div>
        </>
      )}
    </div>
  );
}

Board.propTypes = {
  board: PropTypes.shape({
    iconName: PropTypes.string.isRequired,
    iconText: PropTypes.string.isRequired,
  }).isRequired,
  isChosen: PropTypes.bool,
};