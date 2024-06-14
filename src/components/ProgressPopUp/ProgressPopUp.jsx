import css from "./ProgressPopUp.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { selectColumns } from "../../redux/board/selectors";
import { selectCurrentCard } from "../../redux/card/selectors";
import { moveCard } from "../../redux/board/operations";
import { resetCurrentCard } from "../../redux/card/slice";
import { setIsProgressOpen } from "../../redux/controls/slice";

export default function AddColumnBtn() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const columns = useSelector(selectColumns);
  const card = useSelector(selectCurrentCard);

  const handleClick = (column) => {
    dispatch(moveCard({
      cardId: card._id,
      columnId: column._id,
    }))
    dispatch(setIsProgressOpen(false));
    dispatch(resetCurrentCard());
  };

  return (
    <ul className={clsx(css.cont, css[theme])}>
      {Array.isArray(columns) && columns.map((column) => (
        <li key={column._id}>
          <button
          type="button"
          className={clsx(css.btn, css[theme])}
          onClick={()=>handleClick(column)}
          >
          <p>{column.name}</p>
          <svg className={clsx(css.icon, css[theme])}>
            <use href={`${sprite}#icon-move`}></use>
          </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
