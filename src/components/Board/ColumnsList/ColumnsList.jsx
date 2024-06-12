import { useSelector } from "react-redux";
import AddColumnBtn from "../../AddColumnBtn/AddColumnBtn";
import { selectColumns } from "../../../redux/board/selectors";
import ColumnHeader from "../ColumnHeader/ColumnHeader";
import css from "./ColumnsList.module.css";

function ColumnsList() {
  const columns = useSelector(selectColumns);

  return (
    <ul className={css.columnsList}>
      {Array.isArray(columns) && columns.map(column => 
      (<li key={column._id}>
        <ColumnHeader column={column} />
      </li>)
      )}
      <li><AddColumnBtn/></li>
    </ul>
  )
}

export default ColumnsList;