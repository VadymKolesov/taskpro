import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "../../redux/board/operations";
import Board from "../../components/Board/Board";
import { selectIsBoardRefreshing } from "../../redux/board/selectors";
import Loading from "../../components/Loading/Loading";

export default function ScreensPage() {
  const dispatch = useDispatch();
  const isBoardRefreshing = useSelector(selectIsBoardRefreshing);
  const { boardName } = useParams();

  useEffect(() => {
    dispatch(current(boardName));
  }, [dispatch, boardName]);

  return (
    <>
      {isBoardRefreshing ? <Loading/> : <Board />}
    </>
  );
}
