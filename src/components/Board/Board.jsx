
import BoardHeader from "./BoardHeader/BoardHeader";
import ColumnsList from "./ColumnsList/ColumnsList";
import css from "./Board.module.css";


function Board() {
  

  return (
    <div className={css.board}>
      <BoardHeader />
      <div className={css.columnsCont}>
        <ColumnsList/>
      </div>
    </div>
  )
}

export default Board;