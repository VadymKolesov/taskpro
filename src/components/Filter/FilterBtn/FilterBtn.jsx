import css from "./FilterBtn.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { setIsFilterModalOpen } from "../../../redux/controls/slice";
import { motion } from "framer-motion";
import { selectBoard } from "../../../redux/board/selectors";

function FilterBtn() {
  const theme = useSelector(selectTheme);
  const board = useSelector(selectBoard);

  const isLightText = ["1", "2", "6", "8", "12", "13", "15"].includes(
    board.backgroundName
  );

  const isDarkText = ["3", "4", "5", "7", "9", "10", "11", "14"].includes(
    board.backgroundName
  );

  const filterBtn = clsx(
    css.filterBtn,
    css[theme],
    board.backgroundName !== "0" && isLightText && css.lightText,
    board.backgroundName !== "0" && isDarkText && css.darkText
  );
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(setIsFilterModalOpen(true));
  };
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.05 }}
      className={filterBtn}
      onClick={handleOpenModal}
    >
      <svg className={css.filterIcon}>
        <use href={`${sprite}#icon-filter`}></use>
      </svg>
      Filter
    </motion.button>
  );
}

export default FilterBtn;
