import { useSelector } from "react-redux";
import { selectBoard } from "../../../redux/board/selectors";
import css from "./BoardHeader.module.css";
import FilterBtn from "../../Filter/FilterBtn/FilterBtn";

function BoardHeader() {
  const board = useSelector(selectBoard);
  return (
    <div className={css.header}>
      <h1 className={css.boardTitle}>{board.name}</h1>
      <FilterBtn/>
    </div>
  )
}

export default BoardHeader;