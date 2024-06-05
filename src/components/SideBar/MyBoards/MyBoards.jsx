import CreateNewBoard from "../CreateNewBoard/CreateNewBoard.jsx";
import Board from "../Board/Board.jsx";

export default function MyBoards() {
  return (
    <div>
      <p>My boards</p>
      {/* кнопка "створити нову дошку" */}
      <CreateNewBoard />
      {/* мепаємо всі дошки що є і повертаємо в список () */}
      <ul>
        {boards.map((board) => {
          return (
            <li key={board.id}>
              <Board board={board} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
