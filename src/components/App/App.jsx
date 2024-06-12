import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { current } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
import { getThemeStyle } from "../../scripts/getThemeStyle";
import clsx from "clsx";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ScreensPage = lazy(() => import("../../pages/ScreensPage/ScreensPage"));
const PrivateRoute = lazy(() => import("../PrivateRoute/PrivateRoute"));
const RestrictedRoute = lazy(() =>
  import("../RestrictedRoute/RestrictedRoute")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const EditProfile = lazy(() => import("../EditProfile/EditProfile"));

export default function App() {
  const theme = getThemeStyle(css);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div className={clsx(css.loadBackground, theme)}>
      <div className={clsx(css.loader, theme)}></div>
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
        <Route path="/home" element={<PrivateRoute component={<HomePage />} />}>
          <Route
            path=":boardName"
            element={<PrivateRoute component={<ScreensPage />} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="edit" element={<EditProfile />} /> {/* my test route */}
      </Routes>
    </Suspense>
  );
}
