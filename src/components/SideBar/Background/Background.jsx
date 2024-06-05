import LogoComponent from "../LogoComponent/LogoComponent";
import MyBoards from "../MyBoards/MyBoards";
import NeedHelp from "../NeedHelp/NeedHelp";
import LogOut from "../LogOut/LogOut";
import css from "./Background.module.css";

export default function Background() {
  return (
    <div className={css.background}>
      <LogoComponent />
      <MyBoards />
      <NeedHelp />
      <LogOut />
    </div>
  );
}
