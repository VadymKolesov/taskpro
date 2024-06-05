import css from "./PageTitle.module.css";

export default function PageTitle() {
  return (
    <div className={css.welcome}>
      <div className={css.welcome_logo}>
        <img
          className={css.welcome_img}
          src="../../assets/welcome_m.svg"
          alt="Welcome user"
        />
        <div className={css.logo}>
          <img
            className={css.logo_img}
            src="../../assets/taskpro-logo.svg"
            alt="Task Pro Logo"
          />
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
