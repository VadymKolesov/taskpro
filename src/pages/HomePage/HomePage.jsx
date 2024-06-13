import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectSideBarIsOpen } from "../../redux/controls/selectors";
import { setSideBarOpen } from "../../redux/controls/slice";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import { Outlet, useParams } from "react-router-dom";
import AnimateModals from "../../components/AnimateModals/AnimateModals";
import { clearBoard } from "../../redux/board/slice";
import css from "./HomePage.module.css";
import clsx from "clsx";


export default function HomePage() {
  const dispatch = useDispatch();
  const { boardName } = useParams();
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);
  !boardName && dispatch(clearBoard());
  
  const handleCloseSideBar = () => {
    sideBarIsOpen && dispatch(setSideBarOpen(false));
  };


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
          <AnimateModals/>
        </div>
      </div>
    </div>
  );
}
