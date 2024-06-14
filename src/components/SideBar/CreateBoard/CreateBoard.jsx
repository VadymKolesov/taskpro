import css from "./CreateBoard.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";
import {
  setBoardModalOpen,
  setIsBoardEdit,
  setSideBarOpen,
} from "../../../redux/controls/slice";

export default function CreateBoard() {
  const dispatch = useDispatch();
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  const handleCreate = () => {
    setTimeout(() => {
      dispatch(setSideBarOpen(false));
      dispatch(setIsBoardEdit(false));
      dispatch(setBoardModalOpen(true));
    }, 200);
  };

  return (
    <div className={css.wrapper}>
      <p className={clsx(css.title, theme)}>My boards</p>
      <div className={clsx(css.create, theme)}>
        <p className={clsx(css.createText, theme)}>Create a new board</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className={clsx(css.iconWrapper, theme)}
          onClick={handleCreate}
        >
          <svg className={clsx(css.icon, theme)}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
