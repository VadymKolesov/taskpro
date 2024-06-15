import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/controls/selectors";
import { setSideBarOpen } from "../../redux/controls/slice";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import { Outlet } from "react-router-dom";
import AnimateModals from "../../components/AnimateModals/AnimateModals";
import css from "./HomePage.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { boards } from "../../redux/board/operations";

export default function HomePage() {
  const dispatch = useDispatch();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);

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
      <div className={clsx(css.backdrop, sideBarIsOpen && css.isShown)}></div>

      <div className={css.main}>
        <Header />
        <div className={css.content}>
          <Outlet />
          <AnimateModals />
        </div>
      </div>
    </div>
  );
}
