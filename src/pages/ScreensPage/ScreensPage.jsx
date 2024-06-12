import { useParams } from "react-router-dom";
import css from "./ScreensPage.module.css";
import clsx from "clsx";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { current } from "../../redux/board/operations";
import Board from "../../components/Board/Board";

export default function ScreensPage() {
  const { boardName } = useParams();
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current(boardName))
  }, [dispatch, boardName]);
  
  return (
    <div className={clsx(css.container, getThemeStyle(css, theme))}>
      <Board/>
    </div>
  );
}
