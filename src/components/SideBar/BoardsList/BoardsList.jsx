import css from "./BoardsList.module.css";
import BoardItem from "../BoardItem/BoardItem";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarOpen } from "../../../redux/controls/slice";
import { selectBoards } from "../../../redux/auth/selectors";
import { motion } from "framer-motion";

export default function BoardsList() {
  const list = useSelector(selectBoards);

  const dispatch = useDispatch();

  const handleSidebarClose = () => {
    dispatch(setSideBarOpen(false));
  };

  return (
    <ul className={css.list}>
      {list.map((item) => {
        return (
          <motion.li
            whileTap={{ scale: 0.97 }}
            key={item._id}
            className={css.item}
            onClick={handleSidebarClose}
          >
            <BoardItem board={item} />
          </motion.li>
        );
      })}
    </ul>
  );
}
