import { useSelector } from "react-redux";
import { selectBoard } from "../../../redux/board/selectors";
import { selectTheme } from "../../../redux/auth/selectors";
import css from "./BoardHeader.module.css";
import clsx from "clsx";

function BoardHeader() {
  const board = useSelector(selectBoard);
  const theme = useSelector(selectTheme);

  return (
    <h1 className={clsx(css.boardTitle, css[theme])}>{board.name}</h1>
  )
}

export default BoardHeader;