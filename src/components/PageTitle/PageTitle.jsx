import css from "./PageTitle.module.css";
import sprite from "../../assets/sprite.svg";
import user_icon from "../../assets/welcome_m.png";

export default function PageTitle() {
  return (
    // <div></div>
    <div className={css.welcome}>
      <div className={css.welcome_logo}>
        <img
          className={css.welcome_img}
          alt="Welcome user"
          src={`${user_icon}`}
        />
        <div className={css.logo}>
          <svg
            className={css.logo_img}
            width="40"
            height="40"
            aria-label="logo icon"
          >
            <use href={`${sprite}#icon-home-logo`}></use>
          </svg>
          <p className={css.logo_text}>Task Pro</p>
        </div>
      </div>
      <p className={css.welcome_text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don`t wait, start achieving your goals now!
      </p>
      <button className={css.welcome_button}>Registration</button>
      <a href="" className={css.welcome_login}>
        Log In
      </a>
    </div>
  );
}
