import css from "./Burger.module.css";
import sprite from "../../../assets/sprite.svg";
import clsx from "clsx";
import { getThemeStyle } from "../../../scripts/getThemeStyle";
import { useDispatch } from "react-redux";
import { setSideBarOpen } from "../../../redux/sidebar/slice";

function Burger() {
  const dispatch = useDispatch();
  const burger = clsx(css.burger, getThemeStyle(css));

  const handleOpenSidebar = () => {
    console.log("Open sidebar");
    dispatch(setSideBarOpen());
  };

  return (
    <button className={burger} onClick={handleOpenSidebar}>
      <svg className={css.burgerIcon}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </button>
  );
}

export default Burger;
