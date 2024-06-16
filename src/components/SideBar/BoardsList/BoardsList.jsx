import css from "./BoardsList.module.css";
import BoardItem from "../BoardItem/BoardItem";
import { NavLink, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setBoardModalOpen,
  setIsBoardEdit,
  setIsConfirmBoardDelete,
  setIsConfirmDeleteOpen,
  setSideBarOpen,
} from "../../../redux/controls/slice";
import { selectBoards, selectTheme } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";

export default function BoardsList() {
  const theme = useSelector(selectTheme);
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

  const handleDelete = () => {
    setTimeout(() => {
      dispatch(setIsConfirmBoardDelete(true));
      dispatch(setIsConfirmDeleteOpen(true));
    }, 200);
  };

  return (
    <ul className={css.list}>
      {Array.isArray(list) &&
        list.map((item) => {
          return (
            <motion.li
              whileTap={{ scale: 0.97 }}
              key={nanoid()}
              className={css.item}
            >
              <NavLink
                to={`${item._id}`}
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.isActive, css[theme])
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
            </motion.li>
          );
        })}
    </ul>
  );
}
