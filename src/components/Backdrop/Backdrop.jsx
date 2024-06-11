import css from "./Backdrop.module.css";

export default function Backdrop({ children }) {
  return <div className={css.backdrop}>{children}</div>;
}
