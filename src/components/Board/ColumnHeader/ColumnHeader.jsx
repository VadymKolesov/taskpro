import clsx from "clsx";
import css from "./ColumnHeader.module.css";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import {
  setIsAddColumnOpen,
  setIsColumnEdit,
  setIsConfirmColumnDelete,
  setIsConfirmDeleteOpen,
} from "../../../redux/controls/slice";
import { setCurrentColumn } from "../../../redux/column/slice";

function ColumnHeader({ column }) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(
      setCurrentColumn({
        _id: column._id,
        name: column.name,
      })
    );
    dispatch(setIsAddColumnOpen(true));
    dispatch(setIsColumnEdit(true));
  };

  const handleDelete = () => {
    dispatch(
      setCurrentColumn({
        _id: column._id,
        name: column.name,
      })
    );
    dispatch(setIsConfirmDeleteOpen(true));
    dispatch(setIsConfirmColumnDelete(true));
  };

  return (
    <div className={clsx(css.columnHeader, css[theme])}>
      <h2 className={css.columnTitle}>{column.name}</h2>
      <ul className={css.controlsList}>
        <li>
          <button type="button" onClick={handleUpdate} className={css.itemBtn}>
            <svg className={css.btnIcon}>
              <use href={`${sprite}#icon-pencil`}></use>
            </svg>
          </button>
        </li>
        <li>
          <button type="button" onClick={handleDelete} className={css.itemBtn}>
            <svg className={css.btnIcon}>
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ColumnHeader;
