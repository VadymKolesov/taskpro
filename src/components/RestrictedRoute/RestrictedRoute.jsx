import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component: Component }) {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to="/home" /> : Component;
}
