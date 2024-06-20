import googleLogo from "../../assets/google-logo.svg";
import css from "./GoogleAuthBtn.module.css";

export default function GoogleAuthBtn() {
  return (
    <div className={css.wrapper}>
      <p className={css.separator}>or</p>
      <a
        href="https://taskpro-api-laom.onrender.com/api/auth/google"
        className={css.googleBtn}
      >
        <img src={googleLogo} className={css.googleIcon} />
        <p>Sign in with Google</p>
      </a>
    </div>
  );
}
