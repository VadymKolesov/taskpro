import clsx from "clsx";
import css from "./ColumnHeader.module.css";
import sprite from "../../../assets/sprite.svg";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { deleteColumn } from "../../../redux/board/operations";
import { selectBoard } from "../../../redux/board/selectors";

function ColumnHeader({ column }) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  const board = useSelector(selectBoard)
  const dispatch = useDispatch();
  
  
  const handleUpdate = () => {
    console.log("Update column");
  };

  const handleDelete = () => {
    dispatch(deleteColumn({
      columnId: column._id,
      id: board._id
    }));
  };

  return (
    <div className={css.columnHeader}>
      <h2 className={css.columnTitle}>
        {column.name}
      </h2>
      <ul className={css.controlsList}>
          <li>
            <button
              type="button"
              onClick={handleUpdate}
              className={css.itemBtn}
            >
              <svg className={clsx(css.btnIcon, theme)}>
                <use href={`${sprite}#icon-pencil`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleDelete}
              className={css.itemBtn}
            >
              <svg className={clsx(css.btnIcon, theme)}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </li>
        </ul>
    </div>
  )
}

export default ColumnHeader;