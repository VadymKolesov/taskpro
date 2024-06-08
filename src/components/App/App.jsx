import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { current } from "../../redux/auth/operations";
import { selectisRefreshing } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ScreensPage = lazy(() => import("../../pages/ScreensPage/ScreensPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={css.loadBackground}>
      <div className={css.loader}></div>
    </div>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path="/"
          element={<RestrictedRoute component={<Navigate to="/welcome" />} />}
        />
        <Route
          path="/welcome"
          element={<RestrictedRoute component={<WelcomePage />} />}
        />
        <Route
          path="/auth/:id"
          element={<RestrictedRoute component={<AuthPage />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage />} />}
        />
        <Route
          path="/home/:boardName"
          element={<PrivateRoute component={<ScreensPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
