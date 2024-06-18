import clsx from "clsx";
import css from "./HomePageScreen.module.css";
import { selectTheme } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setBoardModalOpen,
  setIsBoardEdit,
  setSideBarOpen,
} from "../../redux/controls/slice";

export default function HomePageScreen() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const handleCreate = () => {
    setTimeout(() => {
      dispatch(setSideBarOpen(false));
      dispatch(setIsBoardEdit(false));
      dispatch(setBoardModalOpen(true));
    }, 200);
  };

  return (
    <div className={clsx(css.screenCont, css[theme])}>
      <p className={clsx(css.text, css[theme])}>
        Before starting your project, it is essential{" "}
        <span className={clsx(css.textSpan, css[theme])} onClick={handleCreate}>
          to create a board
        </span>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
}
