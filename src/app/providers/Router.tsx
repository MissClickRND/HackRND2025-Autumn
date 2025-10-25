import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Main from "../../pages/Main/Main.page";
import Error404 from "../../pages/Errors/Error404/Error404.page";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Login from "../../pages/Auth/Login/Login";
import Register from "../../pages/Auth/Register/Register";
import AdminPanel from "../../pages/Admin/AdminPanel.page";
import Auth from "./Auth";
import Projects from "../../pages/Projects/Projects.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <MainLayout />
      </Auth>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
