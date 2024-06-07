import CreateNewBoard from "../CreateNewBoard/CreateNewBoard.jsx";
import css from "./MyBoards.module.css";
import Board from "../Board/Board.jsx";
import clsx from "clsx";

// хелпи

const theme = "light";

const isChosen = true;

const boards = [
  { iconText: "bombit`belgorod", id: 1, iconName: "icon-project-1" },
  { iconText: "Project office", id: 2, iconName: "icon-project-2" },
  { iconText: "Neon Light Project", id: 3, iconName: "icon-project-4" },
];

export default function MyBoards() {
  return (
    <div>
      <p className={clsx(css.text, css[theme])}>My boards</p>
      {/* кнопка "створити нову дошку" */}
      <CreateNewBoard />
      {/* мепаємо всі дошки що є і повертаємо в список () */}
      <ul>
        {boards.map((b) => {
          return (
            <li key={b.id}>
              <Board board={b} isChosen={isChosen} />
            </li>
          );
        })}
      </ul>
    </div >
  );
}
