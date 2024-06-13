import { useSelector } from "react-redux";
import { selectColumns } from "../../../redux/board/selectors";
import AddColumnBtn from "../../AddColumnBtn/AddColumnBtn";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import CardList from "../CardList/CardList";
import css from "./ColumnList.module.css";

function ColumnsList() {
  const columns = useSelector(selectColumns);

  return (
    <ul className={css.columnsList}>
      {Array.isArray(columns) && columns.map(column => 
      (<li className={css.column} key={column._id}>
        <ColumnHeader column={column} />
        <CardList cards={column.cards} />
        <AddCardBtn column={column}/>
      </li>)
      )}
      <li><AddColumnBtn/></li>
    </ul>
  )
}

export default ColumnsList;