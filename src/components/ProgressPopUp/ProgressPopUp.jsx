import css from "./ProgressPopUp.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { selectBoard, selectColumns } from "../../redux/board/selectors";
import { selectCurrentCard } from "../../redux/card/selectors";
import { moveCard } from "../../redux/board/operations";
import { resetCurrentCard } from "../../redux/card/slice";
import { setIsProgressOpen } from "../../redux/controls/slice";

export default function AddColumnBtn() {
  const dispatch = useDispatch();
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  const board = useSelector(selectBoard);
  const columns = useSelector(selectColumns);
  const card = useSelector(selectCurrentCard);

  const handleClick = (column) => {
    dispatch(moveCard({
      cardId: card._id,
      columnId: column._id,
      boardId: board._id,
    }))
    dispatch(setIsProgressOpen(false));
    dispatch(resetCurrentCard());
  };

  return (
    <ul className={clsx(css.cont, theme)}>
      {Array.isArray(columns) && columns.map((column) => (
        <li key={column._id}>
          <button
          type="button"
          className={clsx(css.btn, theme)}
          onClick={()=>handleClick(column)}
          >
          <p>{column.name}</p>
          <svg className={clsx(css.icon, theme)}>
            <use href={`${sprite}#icon-move`}></use>
          </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
