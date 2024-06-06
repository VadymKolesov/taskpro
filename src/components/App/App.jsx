import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const WelcomePage = lazy(() => import("../../pages/WelcomePage/WelcomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const ScreensPage = lazy(() => import("../../pages/ScreensPage/ScreensPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const EditProfile = lazy(() => import("../EditProfile/EditProfile"))

export default function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:boardName" element={<ScreensPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="edit" element={<EditProfile />} /> {/* my test route */}
      </Routes>
    </Suspense>
  );
}
