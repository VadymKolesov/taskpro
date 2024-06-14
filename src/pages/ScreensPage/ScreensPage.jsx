import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { current } from "../../redux/board/operations";
import Board from "../../components/Board/Board";
import { selectBoards } from "../../redux/auth/selectors";

export default function ScreensPage() {
  const { boardName } = useParams();
  const boards = useSelector(selectBoards);
  const dispatch = useDispatch();

  const isBoardExist = boards.find((el) => el._id === boardName);

  useEffect(() => {
    dispatch(current(boardName));
  }, [dispatch, boardName]);

  return (
    <>
      {/* {boards.length > 0 && !isBoardExist ? <Navigate to="/home" /> : <Board />} */}
      <Board />
    </>
  );
}
