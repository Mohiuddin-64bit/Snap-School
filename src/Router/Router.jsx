import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import MyClasses from "../Pages/Dashboard/StudentDashboard/MyClasses";

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
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'myClasses',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'studentDashboard',
        element: <StudentDashboard></StudentDashboard>
      },
      {
        path: 'instructorDashboard',
        element: <InstructorDashboard></InstructorDashboard>
      },
      {
        path: "adminDashboard",
        element: <AdminDashboard></AdminDashboard>
      }
    ]
  },
]);

export default router;
