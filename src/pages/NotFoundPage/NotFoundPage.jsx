import { NavLink } from "react-router-dom";
import cactus_icon from "../../assets/cactus_nf.png";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const theme = useSelector(selectTheme);

  return (
    <div className={clsx(css.page, css[theme])}>
      <div className={css.container}>
        <img className={css.nf_img} alt="Page not found" src={cactus_icon} />
        <p className={clsx(css.header, css[theme])}>Whoops!</p>
        <p className={clsx(css.text, css[theme])}>Page not found</p>

        <NavLink to="/home" className={clsx(css.button, css[theme])}>
          Home
        </NavLink>
      </div>
    </div>
  );
}
