import SideBar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsProfileModalsOpen,
  selectSideBarIsOpen,
  selectBoardModalIsOpen,
} from "../../redux/controls/selectors";
import {
  setProfileModalOpen,
  setSideBarOpen,
} from "../../redux/controls/slice";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import { Outlet } from "react-router-dom";
import Backdrop from "../../components/Backdrop/Backdrop";
import EditProfile from "../../components/EditProfile/EditProfile";
import AddBoardPopUp from "../../components/AddBoardPopUp/AddBoardPopUp";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const dispatch = useDispatch();
  const isProfileModalOpen = useSelector(selectIsProfileModalsOpen);
  const isBoardModalOpen = useSelector(selectBoardModalIsOpen);
  const sideBarIsOpen = useSelector(selectSideBarIsOpen);

  const handleCloseSideBar = () => {
    sideBarIsOpen && dispatch(setSideBarOpen(false));
  };
  const handleProfileModalClose = () => {
    isProfileModalOpen && dispatch(setProfileModalOpen(false));
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
          <AnimatePresence>
            {isProfileModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.17 }}
              >
                <Backdrop>
                  <ClickOutsideComponent
                    onClickOutside={handleProfileModalClose}
                  >
                    <motion.div
                      animate={{ scale: [1.02, 1.05, 1, 1] }}
                      exit={{ scale: [1, 1.05, 0.9] }}
                      transition={{ duration: 0.15 }}
                    >
                      <EditProfile />
                    </motion.div>
                  </ClickOutsideComponent>
                </Backdrop>
              </motion.div>
            )}
            {isBoardModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.17 }}
              >
                <Backdrop>
                  <ClickOutsideComponent
                    onClickOutside={handleProfileModalClose}
                  >
                    <motion.div
                      animate={{ scale: [1.02, 1.05, 1, 1] }}
                      exit={{ scale: [1, 1.05, 0.9] }}
                      transition={{ duration: 0.15 }}
                    >
                      <AddBoardPopUp isEdit={false} />
                    </motion.div>
                  </ClickOutsideComponent>
                </Backdrop>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
