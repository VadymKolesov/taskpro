import { useParams } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function AuthPage() {
  const { id } = useParams();

  if (id !== "login" && id !== "register") {
    return <NotFoundPage />;
  }

  return <div>{id === "login" ? <LoginForm /> : <RegisterForm />}</div>;
}
