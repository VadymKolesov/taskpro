import { useParams } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import css from "./ScreensPage.module.css";
import SideBar from "../../components/SideBar/SideBar";

export default function ScreensPage() {
  const { boardName } = useParams();

  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <h2>Test icon</h2>
        <svg className={css.icon}>
          <use href={`${sprite}#icon-project-1`}></use>
        </svg>
        <h1>Screens Page. Board name: {boardName}</h1>
      </div>
    </div>
  );
}
