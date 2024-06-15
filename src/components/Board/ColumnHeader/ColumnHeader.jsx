import clsx from "clsx";
import css from "./ColumnHeader.module.css";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { deleteColumn } from "../../../redux/board/operations";
import { selectBoard } from "../../../redux/board/selectors";
import { setIsAddColumnOpen, setIsColumnEdit } from "../../../redux/controls/slice";
import { setCurrentColumn } from "../../../redux/column/slice";

function ColumnHeader({ column }) {
  const theme = useSelector(selectTheme);
  const board = useSelector(selectBoard)
  const dispatch = useDispatch();
  
  
  const handleUpdate = () => {
    dispatch(setIsAddColumnOpen(true))
    dispatch(setIsColumnEdit(true));
    dispatch(setCurrentColumn({
        _id: column._id,
        name: column.name
    }));
  };

  const handleDelete = () => {
    dispatch(deleteColumn({
      columnId: column._id,
      id: board._id
    }));
  };

  return (
    <div className={clsx(css.columnHeader, css[theme])}>
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
              <svg className={css.btnIcon}>
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
              <svg className={css.btnIcon}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </li>
        </ul>
    </div>
  )
}

export default ColumnHeader;