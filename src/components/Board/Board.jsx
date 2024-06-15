import BoardHeader from "./BoardHeader/BoardHeader";
import ColumnList from "./ColumnList/ColumnList";
import FilterBtn from "../Filter/FilterBtn/FilterBtn";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Board.module.css";
import { useEffect, useRef } from "react";

function Board() {
  const theme = useSelector(selectTheme);
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollBarRef.current;

    const handleWheel = (e) => {
      const isTargetContainer =
        e.target.className === scrollBarRef.current.className;

      if (e.deltaY > 0 && isTargetContainer) scrollContainer.scrollLeft += 100;
      else scrollContainer.scrollLeft -= 100;
    };

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={clsx(css.board, css[theme])}>
      <BoardHeader />
      <span className={css.filter}>
        <FilterBtn />
      </span>
      <div ref={scrollBarRef} className={css.columnsCont}>
        <ColumnList />
      </div>
    </div>
  );
}

export default Board;
