import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { current } from "../../redux/auth/operations";
import { selectIsRefreshing, selectTheme } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./App.module.css";
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
const GoogleRedirectPage = lazy(() =>
  import("../../pages/GoogleRedirectPage/GoogleRedirectPage")
);
const EditProfile = lazy(() => import("../EditProfile/EditProfile"));
const VerifyPage = lazy(() => import("../../pages/VerifyPage/VerifyPage"));

export default function App() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
    document.body.classList.add(theme);
  }, [dispatch, theme]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <div className={clsx(css.loadBackground, css[theme])}>
      <div className={clsx(css.loader, css[theme])}></div>
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
        <Route path="/google-redirect" element={<GoogleRedirectPage />} />
        <Route path="edit" element={<EditProfile />} /> {/* my test route */}
        <Route
          path="/verify/:email"
          element={<RestrictedRoute component={<VerifyPage />} />}
        />
      </Routes>
    </Suspense>
  );
}
