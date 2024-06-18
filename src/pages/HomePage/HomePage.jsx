import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/controls/selectors";
import { setSideBarOpen } from "../../redux/controls/slice";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import { Outlet, useLocation } from "react-router-dom";
import AnimateModals from "../../components/AnimateModals/AnimateModals";
import css from "./HomePage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { boards } from "../../redux/board/operations";
import HomePageScreen from "../../components/HomePageScreen/HomePageScreen";
import { selectTheme } from "../../redux/auth/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);
  const theme = useSelector(selectTheme);

  const handleCloseSideBar = () => {
    sideBarIsOpen && dispatch(setSideBarOpen(false));
  };

  useEffect(() => {
    dispatch(boards());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <ClickOutsideComponent onClickOutside={handleCloseSideBar}>
        <SideBar />
      </ClickOutsideComponent>
      <div
        className={clsx(css.backdrop, sideBarIsOpen && css.isShown, css[theme])}
      ></div>

      <div className={css.main}>
        <Header />
        <div className={css.content}>
          {isHomePage && <HomePageScreen />}
          <Outlet />
          <AnimateModals />
        </div>
      </div>
    </div>
  );
}
