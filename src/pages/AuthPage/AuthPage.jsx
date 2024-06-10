import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./AuthPage.module.css";

export default function AuthPage() {
  const { id } = useParams();

  if (id !== "login" && id !== "register") {
    return <NotFoundPage />;
  }

  return (
    <div className={css.background}>
      {id === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
