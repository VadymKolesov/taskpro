import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "../../redux/board/operations";
import Board from "../../components/Board/Board";

export default function ScreensPage() {
  const { boardName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current(boardName))
  }, [dispatch, boardName]);
  
  return ( <Board/> );
}
