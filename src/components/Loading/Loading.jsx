import clsx from "clsx";
import css from "./Loading.module.css";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/auth/selectors";


function Loading() {
  const theme = useSelector(selectTheme);
  return (
    <div className={clsx(css.loadBackground, css[theme])}>
      <div className={clsx(css.loader, css[theme])}></div>
    </div>
  )
}

export default Loading;