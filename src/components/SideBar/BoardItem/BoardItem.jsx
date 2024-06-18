import css from "./BoardItem.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setBoardModalOpen,
  setDeleteModalText,
  setIsBoardEdit,
  setIsConfirmBoardDelete,
  setIsConfirmDeleteOpen,
} from "../../../redux/controls/slice";

export default function BoardItem({ board }) {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleUpdate = () => {
    setTimeout(() => {
      dispatch(setIsBoardEdit(true));
      dispatch(setBoardModalOpen(true));
    }, 200);
  };

  const handleDelete = () => {
    setTimeout(() => {
      dispatch(setDeleteModalText(`Delete board "${board.name}"?`));
      dispatch(setIsConfirmBoardDelete(true));
      dispatch(setIsConfirmDeleteOpen(true));
    }, 200);
  };

  const { name, iconName, _id } = board;

  return (
    <NavLink
      to={`${_id}`}
      className={({ isActive }) =>
        clsx(css.link, isActive && css.isActive, css[theme])
      }
    >
      {({ isActive }) => (
        <>
          <div className={css.wrapper}>
            <svg className={clsx(css.icon, css[theme])}>
              <use href={`${sprite}#${iconName}`}></use>
            </svg>
            <p className={clsx(css.name, css[theme])}>{name}</p>
          </div>

          {isActive && (
            <div className={css.controls}>
              <ul className={css.controlsList}>
                <li>
                  <button
                    type="button"
                    onClick={() => handleUpdate(_id)}
                    className={css.itemBtn}
                  >
                    <svg className={clsx(css.btnIcon, css[theme])}>
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
                    <svg className={clsx(css.btnIcon, css[theme])}>
                      <use href={`${sprite}#icon-trash`}></use>
                    </svg>
                  </button>
                </li>
              </ul>
              <div className={clsx(css.border, css[theme])}></div>
            </div>
          )}
        </>
      )}
    </NavLink>
  );
}
