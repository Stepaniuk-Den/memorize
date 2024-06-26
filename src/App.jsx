import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import PrivateRoute from "./guards/PrivateRoute";
import Layout from "./components/layout/Layout";
import { lazy } from "react";

const Home = lazy(() => import("./pages/homePage/HomePage"));
const Current = lazy(() => import("./pages/currentQuizPage/CurrentQuizPage"));
const Create = lazy(() => import("./pages/createQuizPage/CreateQuizPage"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute>{<Home />}</PrivateRoute>} />
          <Route
            path="current"
            element={
              <PrivateRoute>
                <Current />
              </PrivateRoute>
            }
          />
          <Route
            path="create"
            element={
              <PrivateRoute>
                <Create />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
