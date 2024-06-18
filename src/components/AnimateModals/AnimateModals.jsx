import EditProfile from "../../components/EditProfile/EditProfile";
import AddBoardPopUp from "../../components/AddBoardPopUp/AddBoardPopUp";
import ClickOutsideComponent from "../../helpers/ClickOutsideComponent";
import FilterModal from "../../components/Filter/FilterModal";
import AddColumnPopUp from "../AddColumnPopUp/AddColumnPopUp";
import CardPopUp from "../CardPopUp/CardPopUp";
import ProgressPopUp from "../../components/ProgressPopUp/ProgressPopUp";
import HelpForm from "../HelpForm/HelpForm";
import SentMessage from "../SentMessage/SentMessage";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import css from "./AnimateModals.module.css";

import {
  setBoardModalOpen,
  setIsAddColumnOpen,
  setIsFilterModalOpen,
  setProfileModalOpen,
  setIsAddCardOpen,
  setIsProgressOpen,
  setIsNeedHelpModalOpen,
  setIsConfirmBoardDelete,
  setIsConfirmColumnDelete,
  setIsConfirmCardDelete,
  setIsConfirmDeleteOpen,
  setDeleteModalText,
} from "../../redux/controls/slice";

import {
  selectBoardModalIsOpen,
  selectIsAddColumnOpen,
  selectIsFilterModalOpen,
  selectIsProfileModalsOpen,
  selectIsAddCardOpen,
  selectIsProgressOpen,
  selectIsNeedHelpModalOpen,
  selectIsConfirmBoardDelete,
  selectIsConfirmColumnDelete,
  selectIsConfirmCardDelete,
  selectIsConfirmDeleteOpen,
  selectDeleteModalText,
} from "../../redux/controls/selectors";
import { resetCurrentColumn } from "../../redux/column/slice";
import { resetCurrentCard } from "../../redux/card/slice";
import { selectIsSent } from "../../redux/needHelp/selectors";
import ConfirmDelete from "../ConfirmDelete/ConfirmDelete";
import EscHandler from "../EscHandler/EscHandler";
import clsx from "clsx";
import { selectTheme } from "../../redux/auth/selectors";

function AnimateModals() {
  const isProfileModalOpen = useSelector(selectIsProfileModalsOpen);
  const isBoardModalOpen = useSelector(selectBoardModalIsOpen);
  const isFilterModalOpen = useSelector(selectIsFilterModalOpen);
  const isAddColumnOpen = useSelector(selectIsAddColumnOpen);
  const isAddCardOpen = useSelector(selectIsAddCardOpen);
  const isProgressOpen = useSelector(selectIsProgressOpen);
  const isNeedHelpModalOpen = useSelector(selectIsNeedHelpModalOpen);
  const isSent = useSelector(selectIsSent);
  const isConfirmDeleteOpen = useSelector(selectIsConfirmDeleteOpen);
  const isConfirmBoardDelete = useSelector(selectIsConfirmBoardDelete);
  const isConfirmColumnDelete = useSelector(selectIsConfirmColumnDelete);
  const isConfirmCardDelete = useSelector(selectIsConfirmCardDelete);
  const deleteModalText = useSelector(selectDeleteModalText);
  const theme = useSelector(selectTheme);

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

  const handleAddColumnClose = () => {
    isAddColumnOpen && dispatch(setIsAddColumnOpen(false));
    isAddColumnOpen && dispatch(resetCurrentColumn());
  };

  const handleAddCardClose = () => {
    isAddCardOpen && dispatch(setIsAddCardOpen(false));
    isAddCardOpen && dispatch(resetCurrentCard());
  };

  const handleConfirmBoardClose = () => {
    isConfirmBoardDelete && dispatch(setIsConfirmBoardDelete(false));
    isConfirmColumnDelete && dispatch(setIsConfirmColumnDelete(false));
    isConfirmCardDelete && dispatch(setIsConfirmCardDelete(false));
    dispatch(setDeleteModalText(null));
    dispatch(setIsConfirmDeleteOpen(false));
  };

  const handleProgressClose = () => {
    isProgressOpen && dispatch(setIsProgressOpen(false));
    setTimeout(() => {
      dispatch(resetCurrentColumn());
    }, 200);
  };

  const handleNeedHelpModalClose = () => {
    isNeedHelpModalOpen && dispatch(setIsNeedHelpModalOpen(false));
    setTimeout(() => {
      dispatch(resetCurrentColumn());
    }, 200);
  };

  return (
    <AnimatePresence>
      {isProfileModalOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleProfileModalClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <EditProfile />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isBoardModalOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleBoardModalClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <AddBoardPopUp />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isFilterModalOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleFilterModalClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <FilterModal />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isAddColumnOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleAddColumnClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <AddColumnPopUp />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isAddCardOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleAddCardClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <CardPopUp />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isProgressOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleProgressClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <ProgressPopUp />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isNeedHelpModalOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleNeedHelpModalClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              {isSent ? <SentMessage /> : <HelpForm />}
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isConfirmDeleteOpen && (
        <motion.div
          className={clsx(css.backdrop, css[theme])}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.17 }}
        >
          <ClickOutsideComponent onClickOutside={handleConfirmBoardClose}>
            <motion.div
              animate={{ scale: [1.02, 1.05, 1, 1] }}
              exit={{ scale: [1, 1.05, 0.9] }}
              transition={{ duration: 0.15 }}
            >
              <ConfirmDelete text={deleteModalText} />
            </motion.div>
          </ClickOutsideComponent>
        </motion.div>
      )}
      {isProfileModalOpen && (
        <EscHandler key={"esc"} onEsc={handleProfileModalClose} />
      )}
      {isBoardModalOpen && (
        <EscHandler key={"esc"} onEsc={handleBoardModalClose} />
      )}
      {isFilterModalOpen && (
        <EscHandler key={"esc"} onEsc={handleFilterModalClose} />
      )}
      {isAddColumnOpen && (
        <EscHandler key={"esc"} onEsc={handleAddColumnClose} />
      )}
      {isAddCardOpen && <EscHandler key={"esc"} onEsc={handleAddCardClose} />}
      {isProgressOpen && <EscHandler key={"esc"} onEsc={handleProgressClose} />}
      {isNeedHelpModalOpen && (
        <EscHandler key={"esc"} onEsc={handleNeedHelpModalClose} />
      )}
      {isConfirmDeleteOpen && (
        <EscHandler key={"esc"} onEsc={handleConfirmBoardClose} />
      )}
    </AnimatePresence>
  );
}

export default AnimateModals;
