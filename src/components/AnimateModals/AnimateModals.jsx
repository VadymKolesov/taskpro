import Backdrop from "../../components/Backdrop/Backdrop";
import EditProfile from "../../components/EditProfile/EditProfile";
import AddBoardPopUp from "../../components/AddBoardPopUp/AddBoardPopUp";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import FilterModal from "../../components/Filter/FilterModal";
import AddColumnPopUp from "../AddColumnPopUp/AddColumnPopUp";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import {
  setBoardModalOpen,
  setIsAddColumnOpen,
  setIsFilterModalOpen,
  setProfileModalOpen
} from "../../redux/controls/slice";

import {
  selectBoardModalIsOpen,
  selectIsAddColumnOpen,
  selectIsFilterModalOpen,
  selectIsProfileModalsOpen
} from "../../redux/controls/selectors";

function AnimateModals() {
  const isProfileModalOpen = useSelector(selectIsProfileModalsOpen);
  const isBoardModalOpen = useSelector(selectBoardModalIsOpen);
  const isFilterModalOpen = useSelector(selectIsFilterModalOpen);
  const isAddColumnOpen = useSelector(selectIsAddColumnOpen);

  const dispatch = useDispatch();

  const handleProfileModalClose = () => {
    isProfileModalOpen && dispatch(setProfileModalOpen(false));
  };
  const handleBoardModalClose = () => {
    isBoardModalOpen && dispatch(setBoardModalOpen(false));
  };
  const handleFilterModalClose = () => {
    isFilterModalOpen && dispatch(setIsFilterModalOpen(false));
  };

  const handleAddColumnclose = () => {
    isAddColumnOpen && dispatch(setIsAddColumnOpen(false));
  };

  return (
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
            <ClickOutsideComponent onClickOutside={handleBoardModalClose}>
              <motion.div
                animate={{ scale: [1.02, 1.05, 1, 1] }}
                exit={{ scale: [1, 1.05, 0.9] }}
                transition={{ duration: 0.15 }}
              >
                <AddBoardPopUp/>
              </motion.div>
            </ClickOutsideComponent>
          </Backdrop>
        </motion.div>
      )}
      {isFilterModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <Backdrop>
            <ClickOutsideComponent onClickOutside={handleFilterModalClose}>
              <motion.div
                animate={{ scale: [1.02, 1.05, 1, 1] }}
                exit={{ scale: [1, 1.05, 0.9] }}
                transition={{ duration: 0.15 }}
              >
                <FilterModal/>
              </motion.div>
            </ClickOutsideComponent>
          </Backdrop>
        </motion.div>
      )}
      {isAddColumnOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <Backdrop>
            <ClickOutsideComponent
              onClickOutside={handleAddColumnclose}
            >
              <motion.div
                animate={{ scale: [1.02, 1.05, 1, 1] }}
                exit={{ scale: [1, 1.05, 0.9] }}
                transition={{ duration: 0.15 }}
              >
                <AddColumnPopUp/>
              </motion.div>
            </ClickOutsideComponent>
          </Backdrop>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnimateModals;