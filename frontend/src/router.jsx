import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Root from "./pages/Root";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AllParking from "./pages/AllParking.jsx";
import ChooseParking from "./pages/ChooseParking.jsx";
import History from "./pages/History.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<App />} />
      <Route index path="/chooseParking" element={<ChooseParking />} />
      <Route path="/allparking" element={<AllParking />} />
      <Route path="/history" element={<History />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Route>
  )
);

export default router;
