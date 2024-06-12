import css from "./AddColumnBtn.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";
import { setIsAddColumnOpen } from "../../redux/controls/slice";

export default function AddColumnBtn() {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsAddColumnOpen(true));
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type="button"
      className={clsx(css.btn, theme)}
      onClick={handleClick}
    >
      <div className={clsx(css.plusCont, theme)}>
        <svg className={clsx(css.plusIcon, theme)}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>
      Add another column
    </motion.button>
  );
}
