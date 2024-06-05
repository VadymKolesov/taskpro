import Overflow from "../Overflow/Overflow.jsx";
import sprite from "../../sprite.svg";

export default function Board({ board }) {
  // Overflow вик. на board якщо вона обрана

  return (
    <div>
      <svg className={css.icon}>
        <use href={`${sprite}#${board.iconName}`}></use>
      </svg>
      <p>${board.iconText}</p>
      <ul className={css.opIconsWrapper}>
        <li>
          <button>
            <svg className={css.op}>
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg className={css.op}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
