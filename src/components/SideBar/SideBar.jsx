import clsx from "clsx";
import css from "./SideBar.module.css";
import sprite from "../../assets/sprite.svg";
import CreateBoard from "./CreateBoard/CreateBoard";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelpItem from "./NeedHelpItem/NeedHelpItem";
import LogoutBtn from "./LogoutBtn/LogoutBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/sidebar/selectors";
import { NavLink } from "react-router-dom";
import { setSideBarClose } from "../../redux/sidebar/slice";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { selectTheme } from "../../redux/auth/selectors";

export default function SideBar() {
  const userTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);
  const theme = getThemeStyle(css, userTheme);

  const handleSideBarClose = () => {
    dispatch(setSideBarClose());
  };

  return (
    <div className={clsx(css.wrapper, theme, sideBarIsOpen && css.isOpen)}>
      <div>
        <NavLink
          to="/home"
          className={css.logoItem}
          onClick={handleSideBarClose}
        >
          <div className={clsx(css.logoWrapper, theme)}>
            <svg className={clsx(css.logo, theme)}>
              <use href={`${sprite}#logo`}></use>
            </svg>
          </div>
          <h1 className={clsx(css.title, theme)}>Task Pro</h1>
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
