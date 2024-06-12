import css from "./Button.module.css";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";

export default function Button({ text, isIcon, verticalPadding, type }) {
  const userTheme = useSelector(selectTheme);
  const theme = getThemeStyle(css, userTheme);

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.1 }}
        className={clsx(css.button, theme ? theme : css.dark)}
        style={{ padding: `${verticalPadding} 0` }}
        type={type}
      >
        {isIcon && (
          <span className={clsx(css.iconWrapper, theme)}>
            <svg className={clsx(css.icon, theme)}>
              <use href={`${sprite}#icon-plus`}></use>
            </svg>
          </span>
        )}
        <p>{text}</p>
      </motion.button>
    </>
  );
}
