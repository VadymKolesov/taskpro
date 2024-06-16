import clsx from "clsx";
import css from "./HomePageScreen.module.css";
import { selectTheme } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export const HomePageScreen = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={clsx(css.screenCont, css[theme])}>
      <p className={clsx(css.text, css[theme])}>
        Before starting your project, it is essential{" "}
        <span className={clsx(css.textSpan, css[theme])}>
          to create a board
        </span>{" "}
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};
