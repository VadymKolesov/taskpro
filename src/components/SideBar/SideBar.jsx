import clsx from "clsx";
import css from "./SideBar.module.css";
import sprite from "../../assets/sprite.svg";
import CreateBoard from "./CreateBoard/CreateBoard";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelpItem from "./NeedHelpItem/NeedHelpItem";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/controls/selectors";
import { NavLink } from "react-router-dom";
import { setSideBarOpen } from "../../redux/controls/slice";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { boards } from "../../redux/auth/operations";
import { selectBoard } from "../../redux/board/selectors";

export default function SideBar() {
  const userTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);
  const theme = getThemeStyle(css, userTheme);
  const board = useSelector(selectBoard);

  useEffect(() => {
    dispatch(boards());
  },[dispatch, board])

  const handleSideBarClose = () => {
    dispatch(setSideBarOpen(false));
  };

  return (
    <div className={clsx(css.wrapper, theme, sideBarIsOpen && css.isOpen)}>
      <div>
        <NavLink to="/home" onClick={handleSideBarClose}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            className={css.logoItem}
          >
            <div className={clsx(css.logoWrapper, theme)}>
              <svg className={clsx(css.logo, theme)}>
                <use href={`${sprite}#logo`}></use>
              </svg>
            </div>
            <h1 className={clsx(css.title, theme)}>Task Pro</h1>
          </motion.div>
        </NavLink>
        <CreateBoard theme={theme} />
      </div>
      <BoardsList theme={theme} />
      <div className={css.bottom}>
        <NeedHelpItem theme={theme} />
        <LogoutBtn theme={theme} />
      </div>
    </div>
  );
}
