import sprite from "../../sprite.svg";
import css from "./CreateNewBoard.module.css";

export default function CreateNewBoard() {
  return (
    <div>
      <p>Create a new board</p>
      <button>
        <svg className={css.plus}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </button>
    </div>
  );
}
