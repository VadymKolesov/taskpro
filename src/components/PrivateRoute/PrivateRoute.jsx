import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(selectIsAuth);

  return !isAuth ? <Navigate to="/auth/login" /> : Component;
}
