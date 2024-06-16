import css from "./Button.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";

export default function Button({ text, isIcon, verticalPadding, type }) {
  const theme = useSelector(selectTheme);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        className={clsx(css.button, css[theme])}
        style={{ padding: `${verticalPadding} 0` }}
        type={type}
      >
        {isIcon && (
          <span className={clsx(css.iconWrapper, css[theme])}>
            <svg className={clsx(css.icon, css[theme])}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
        )}
        <p>{text}</p>
      </motion.button>
    </>
  );
}
