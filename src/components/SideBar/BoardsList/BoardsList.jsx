import css from "./BoardsList.module.css";
import BoardItem from "../BoardItem/BoardItem";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setBoardModalOpen,
  setIsBoardEdit,
  setSideBarOpen,
} from "../../../redux/controls/slice";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { selectBoards, selectTheme } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";
import { remove } from "../../../redux/board/operations";

export default function BoardsList() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  const list = useSelector(selectBoards);
  const { boardName } = useParams();

  const navigate = useNavigate();

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

  const handleDelete = async (boardId) => {
    const previosBoardIndex = list.findIndex((el) => el._id === boardId) - 1;
    const previosBoardId =
      previosBoardIndex !== -1 ? list[previosBoardIndex]._id : null;

    const action = await dispatch(remove(boardId));

    if (remove.fulfilled.match(action)) {
      previosBoardId ? navigate(`/home/${previosBoardId}`) : navigate(`/home`);
    }

    console.log("Delete board :" + boardId);
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
