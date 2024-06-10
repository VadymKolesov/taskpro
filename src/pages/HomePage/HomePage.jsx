import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/sidebar/selectors";
import { setSideBarClose } from "../../redux/sidebar/slice";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);

  const handleCloseSideBar = () => {
    dispatch(setSideBarClose());
  };

  return (
    <div className={css.container}>
      <SideBar />
      <div
        className={clsx(css.backdrop, sideBarIsOpen && css.isShown)}
        onClick={handleCloseSideBar}
      ></div>
      <div className={css.main}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
