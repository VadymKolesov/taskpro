import css from "./Burger.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarOpen } from "../../../redux/controls/slice";
import { selectTheme } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";

function Burger() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const burger = clsx(css.burger, css[theme]);

  const handleOpenSidebar = () => {
    dispatch(setSideBarOpen(true));
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
      className={burger}
      onClick={handleOpenSidebar}
    >
      <svg className={css.burgerIcon}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </motion.button>
  );
}

export default Burger;
