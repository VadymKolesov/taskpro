import css from "./CreateBoard.module.css";
import clsx from "clsx";
import sprite from "../../../assets/sprite.svg";
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
  const theme = useSelector(selectTheme);

  const handleCreate = () => {
    setTimeout(() => {
      dispatch(setSideBarOpen(false));
      dispatch(setIsBoardEdit(false));
      dispatch(setBoardModalOpen(true));
    }, 200);
  };

  return (
    <div className={css.wrapper}>
      <p className={clsx(css.title, css[theme])}>My boards</p>
      <div className={clsx(css.create, css[theme])}>
        <p className={clsx(css.createText, css[theme])}>Create a new board</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className={clsx(css.iconWrapper, css[theme])}
          onClick={handleCreate}
        >
          <svg className={clsx(css.icon, css[theme])}>
            <use href={`${sprite}#icon-plus`}></use>
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
