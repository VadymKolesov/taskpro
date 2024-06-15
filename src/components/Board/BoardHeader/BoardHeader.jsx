import { useSelector } from "react-redux";
import { selectBoard } from "../../../redux/board/selectors";
import { selectTheme } from "../../../redux/auth/selectors";
import css from "./BoardHeader.module.css";
import clsx from "clsx";

function BoardHeader() {
  const board = useSelector(selectBoard);
  const theme = useSelector(selectTheme);

  const isLightText = ["1", "2", "6", "8", "12", "13", "15"].includes(
    board.backgroundName
  );

  return (
    <h1
      className={clsx(css.boardTitle, css[theme], {
        [css.lightText]: isLightText || board.backgroundName === "0",
      })}
    >
      {board.name}
    </h1>
  );
}

export default BoardHeader;
