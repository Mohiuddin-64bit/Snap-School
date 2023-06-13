import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Instructor from "../Pages/Instructor/Instructor";
import MyClasses from "../Pages/Dashboard/StudentDashboard/MyClasses";
import PrivateRoute from "./PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass";
import InstructorClasses from "../Pages/Dashboard/InstructorDashboard/InstructorClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path: "/login", element: <Login></Login> },
      { path: "/classes", element: <Classes></Classes> },
      { path: "/instructor", element: <Instructor></Instructor> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "instructorClasses",
        element: <InstructorClasses></InstructorClasses>,
      },
    ],
  },
]);

export default router;
