import BoardHeader from "./BoardHeader/BoardHeader";
import ColumnList from "./ColumnList/ColumnList";
import FilterBtn from "../Filter/FilterBtn/FilterBtn";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Board.module.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { background } from "./BoardBg/BoardBg";
import { selectBoard } from "../../redux/board/selectors";

function Board() {
  const theme = useSelector(selectTheme);
  const board = useSelector(selectBoard);
  const scrollBarRef = useRef(null);
  const [BgImg, setBgImg] = useState("");

  const updateBgImg = useCallback(() => {
    const width = window.innerWidth;
    const pixelRatio = window.devicePixelRatio;
    let size = "mobile";
    let resolution = "";

    if (width > 767 && width < 1440) {
      size = "tablet";
    } else if (width >= 1440) {
      size = "desktop";
    }

    if (pixelRatio > 1 && pixelRatio <= 2) {
      resolution = "2x";
    } else if (pixelRatio > 2) {
      resolution = "4x";
    }

    const selectedBackground = background[board.backgroundName];
    if (selectedBackground) {
      setBgImg(selectedBackground[size][resolution]);
    }
  }, [board.backgroundName]);

  useEffect(() => {
    updateBgImg();
    window.addEventListener("resize", updateBgImg);

    return () => {
      window.removeEventListener("resize", updateBgImg);
    };
  }, [updateBgImg]);

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
    <div
      className={clsx(css.board, css.boardWithBg, css[theme])}
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
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
