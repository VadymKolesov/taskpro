import LogoComponent from "../LogoComponent/LogoComponent";
import MyBoards from "../MyBoards/MyBoards";
import NeedHelp from "../NeedHelp/NeedHelp";
import css from "./Background.module.css";
import LogOut from "../LogOut/LogOut";
import clsx from "clsx";

const theme = "light";

export default function Background() {
  return (
    <div className={clsx(css.background, css[theme])}>
      <LogoComponent />
      <MyBoards />
      <NeedHelp />
      <LogOut />
    </div>
  );
}
