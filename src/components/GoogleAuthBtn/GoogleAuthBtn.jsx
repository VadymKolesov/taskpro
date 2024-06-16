import { FaGoogle } from "react-icons/fa";
import css from "./GoogleAuthBtn.module.css";

export default function GoogleAuthBtn() {
  return (
    <a
      href="https://taskpro-api-laom.onrender.com/api/auth/google"
      className={css.googleBtn}
    >
      <FaGoogle className={css.googleIcon} />
      <p>Sign in with Google</p>
    </a>
  );
}
