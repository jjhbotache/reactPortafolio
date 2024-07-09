import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from "./pages/MainPage/MainPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/main",
      element: <MainPage />,
    },
    {
      path: "*", // Esta ruta captura cualquier URL que no coincida con las anteriores
      element: <LandingPage/>,
    },

  ],
);
