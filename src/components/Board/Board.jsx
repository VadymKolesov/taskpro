import BoardHeader from "./BoardHeader/BoardHeader";
import ColumnsList from "./ColumnsList/ColumnsList";
import FilterBtn from "../Filter/FilterBtn/FilterBtn";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Board.module.css";

function Board() {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.board, css[theme])}>
      <BoardHeader />
      <span className={css.filter}>
        <FilterBtn />
      </span>
      <div className={css.columnsCont}>
        <ColumnsList/>
      </div>
    </div>
  )
}

export default Board;