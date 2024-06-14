import css from "./AddColumnBtn.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";
import { setIsAddColumnOpen, setIsColumnEdit } from "../../redux/controls/slice";

export default function AddColumnBtn() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsAddColumnOpen(true));
    dispatch(setIsColumnEdit(false));
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type="button"
      className={clsx(css.btn, css[theme])}
      onClick={handleClick}
    >
      <div className={clsx(css.plusCont, css[theme])}>
        <svg className={clsx(css.plusIcon, css[theme])}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>
      Add another column
    </motion.button>
  );
}
