import css from "./BoardsList.module.css";
import BoardItem from "../BoardItem/BoardItem";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setBoardModalOpen, setIsBoardEdit, setSideBarOpen } from "../../../redux/controls/slice";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { selectBoards, selectTheme } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";
import { remove } from "../../../redux/board/operations";
import { removeBoard } from "../../../redux/auth/slice";

export default function BoardsList() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  const list = useSelector(selectBoards);

  const dispatch = useDispatch();

  const handleSidebarClose = () => {
    dispatch(setSideBarOpen(false));
  };

  const handleUpdate = () => {
    setTimeout(() => {
      dispatch(setIsBoardEdit(true));
      dispatch(setBoardModalOpen(true));
    }, 200);
  };

  const handleDelete = (boardId) => {
    // dispatch(remove(boardId));
    // dispatch(removeBoard(boardId));
    console.log("Delete board :" + boardId);
  };

  return (
    <ul className={css.list}>
      {Array.isArray(list) && list.map((item) => {
        return (
          <motion.li
            whileTap={{ scale: 0.9 }}
            key={nanoid()}
            className={css.item}
          >
            <NavLink
              to={`${item._id}`}
              className={({ isActive }) =>
                clsx(css.link, isActive && css.isActive, theme)
              }
              onClick={handleSidebarClose}
            >
              {({ isActive }) => (
                <>
                  <BoardItem board={item} />

                  {isActive && (
                    <div className={css.controls}>
                      <ul className={css.controlsList}>
                        <li>
                          <button
                            type="button"
                            onClick={() => handleUpdate(item._id)}
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
                            onMouseDown={() => handleDelete(item._id)}
                            className={css.itemBtn}
                          >
                            <svg className={clsx(css.btnIcon, theme)}>
                              <use href={`${sprite}#icon-trash`}></use>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <div className={clsx(css.border, theme)}></div>
                    </div>
                  )}
                </>
              )}
            </NavLink>
          </motion.li>
        );
      })}
    </ul>
  );
}
