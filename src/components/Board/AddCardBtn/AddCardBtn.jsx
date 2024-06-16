import css from "./AddCardBtn.module.css";
import sprite from "../../../assets/sprite.svg";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { setIsAddCardOpen, setIsCardEdit } from "../../../redux/controls/slice";
import { setCurrentColumn } from "../../../redux/column/slice";

function AddCardBtn({ column }) {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  function handleOpenAddCard() {
    dispatch(setIsCardEdit(false));
    dispatch(setIsAddCardOpen(true));
    dispatch(setCurrentColumn({ _id: column._id, name: column.name }));
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={clsx(css.button, css[theme])}
      type="button"
      onClick={handleOpenAddCard}
      >
      <span className={css.iconWrapper}>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </span>
      <p>Add another card</p>
    </motion.button>
  )
} 

export default AddCardBtn;