import css from "./FilterBtn.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import { setIsFilterModalOpen } from "../../../redux/controls/slice";
import { motion } from "framer-motion";

function FilterBtn() {
  const theme = useSelector(selectTheme);
  const filterBtn = clsx(css.filterBtn, css[theme]);
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
