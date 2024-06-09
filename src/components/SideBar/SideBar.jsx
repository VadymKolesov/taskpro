import clsx from "clsx";
import css from "./SideBar.module.css";
import sprite from "../../assets/sprite.svg";
import CreateBoard from "./CreateBoard/CreateBoard";
import BoardsList from "./BoardsList/BoardsList";
import NeedHelpItem from "./NeedHelpItem/NeedHelpItem";
import LogoutBtn from "./LogoutBtn/LogoutBtn";

export default function SideBar() {
  const theme = "dark";

  return (
    <div className={clsx(css.wrapper, css[theme])}>
      <div>
        <div className={css.logoItem}>
          <div className={clsx(css.logoWrapper, css[theme])}>
            <svg className={clsx(css.logo, css[theme])}>
              <use href={`${sprite}#logo`}></use>
            </svg>
          </div>
          <h1 className={clsx(css.title, css[theme])}>Task Pro</h1>
        </div>
        <CreateBoard theme={theme} />
        <BoardsList theme={theme} />
      </div>
      <div className={css.bottom}>
        <NeedHelpItem theme={theme} />
        <LogoutBtn theme={theme} />
      </div>
    </div>
  );
}
