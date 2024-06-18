import { selectBoards, selectTheme } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { deleteColumn, remove, removeCard } from "../../redux/board/operations";

import {
  selectIsConfirmBoardDelete,
  selectIsConfirmCardDelete,
  selectIsConfirmColumnDelete,
} from "../../redux/controls/selectors";

import {
  setDeleteModalText,
  setIsConfirmBoardDelete,
  setIsConfirmCardDelete,
  setIsConfirmColumnDelete,
  setIsConfirmDeleteOpen,
} from "../../redux/controls/slice";

import { selectBoard } from "../../redux/board/selectors";
import { selectCurrentColumn } from "../../redux/column/selectors";
import { selectCurrentCard } from "../../redux/card/selectors";
import { useNavigate } from "react-router-dom";
import css from "./ConfirmDelete.module.css";
import clsx from "clsx";

export default function ConfirmDelete({ text }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(selectTheme);
  const board = useSelector(selectBoard);
  const column = useSelector(selectCurrentColumn);
  const card = useSelector(selectCurrentCard);
  const list = useSelector(selectBoards);
  const isConfirmBoardDelete = useSelector(selectIsConfirmBoardDelete);
  const isConfirmColumnDelete = useSelector(selectIsConfirmColumnDelete);
  const isConfirmCardDelete = useSelector(selectIsConfirmCardDelete);

  async function handleBoardDelete() {
    const previosBoardIndex = list.findIndex((el) => el._id === board._id) - 1;
    const previosBoardId =
      previosBoardIndex !== -1 ? list[previosBoardIndex]._id : null;
    const action = await dispatch(remove(board._id));
    if (remove.fulfilled.match(action)) {
      previosBoardId ? navigate(`/home/${previosBoardId}`) : navigate(`/home`);
    }
    dispatch(setIsConfirmBoardDelete(false));
    dispatch(setIsConfirmDeleteOpen(false));
  }

  function handleColumnDelete() {
    dispatch(
      deleteColumn({
        columnId: column._id,
        id: board._id,
      })
    );
    dispatch(setIsConfirmColumnDelete(false));
    dispatch(setIsConfirmDeleteOpen(false));
  }

  function handleCardDelete() {
    dispatch(removeCard({ cardId: card._id }));
    dispatch(setIsConfirmCardDelete(false));
    dispatch(setIsConfirmDeleteOpen(false));
  }

  function handleCancel() {
    isConfirmBoardDelete && dispatch(setIsConfirmBoardDelete(false));
    isConfirmColumnDelete && dispatch(setIsConfirmColumnDelete(false));
    isConfirmCardDelete && dispatch(setIsConfirmCardDelete(false));
    dispatch(setDeleteModalText(null));
    dispatch(setIsConfirmDeleteOpen(false));
  }

  return (
    <div className={clsx(css.wrapper, css[theme])}>
      <p className={clsx(css.title, css[theme])}>{text}</p>
      <ul className={css.list}>
        <li className={css.item}>
          <button className={clsx(css.btn, css[theme])} onClick={handleCancel}>
            Cancel
          </button>
        </li>
        <li className={css.item}>
          {isConfirmBoardDelete && (
            <button
              className={clsx(css.btn, css.del, css[theme])}
              onClick={handleBoardDelete}
            >
              Delete
            </button>
          )}
          {isConfirmColumnDelete && (
            <button
              className={clsx(css.btn, css.del, css[theme])}
              onClick={handleColumnDelete}
            >
              Delete
            </button>
          )}
          {isConfirmCardDelete && (
            <button
              className={clsx(css.btn, css.del, css[theme])}
              onClick={handleCardDelete}
            >
              Delete
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
