import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PopularClasses from "../Pages/PopularClasses/PopularClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);

export default router;
