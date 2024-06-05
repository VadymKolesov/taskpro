import css from "./AddColumnBtn.module.css";
import clsx from "clsx";

export default function AddColumnBtn() {
  const theme = "violet";

  return (
    <button className={clsx(css.btn, css[theme])}>
      <div className={clsx(css.plusCont, css[theme])}>+</div>
      Add another column
    </button>
  );
}
