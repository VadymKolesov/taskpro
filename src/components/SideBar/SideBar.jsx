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
import { selectTheme } from "../../redux/auth/selectors";
import { motion } from "framer-motion";

export default function SideBar() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);

  const handleSideBarClose = () => {
    dispatch(setSideBarOpen(false));
  };

  return (
    <div className={clsx(css.wrapper, css[theme], sideBarIsOpen && css.isOpen)}>
      <div>
        <NavLink to="/home" onClick={handleSideBarClose}>
          <motion.div
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.1 }}
            className={css.logoItem}
          >
            <div className={clsx(css.logoWrapper, css[theme])}>
              <svg className={clsx(css.logo, css[theme])}>
                <use href={`${sprite}#logo`}></use>
              </svg>
            </div>
            <h1 className={clsx(css.title, css[theme])}>Task Pro</h1>
          </motion.div>
        </NavLink>
        <CreateBoard/>
      </div>
      <BoardsList/>
      <div className={css.bottom}>
        <NeedHelpItem/>
        <LogoutBtn/>
      </div>
    </div>
  );
}
