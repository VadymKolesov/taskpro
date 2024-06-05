import { useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

export default function AuthPage() {
  const { id } = useParams();

  if (id !== "login" && id !== "register") {
    return <NotFoundPage />;
  }

  return <div>{id === "login" ? <LoginPage /> : <RegisterPage />}</div>;
}
