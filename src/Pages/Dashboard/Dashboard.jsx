import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaSchool,
  FaMoneyCheck,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/usersE?email=${user.email}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setUsers(data[0].role);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <div>
      <Helmet title="Snap School | Dashboard"></Helmet>
      <div className="drawer lg:drawer-open">
        
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-white dark:bg-white/70 ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            <img width={200} className="mx-auto" src="/snap.png" alt="" />
            {users === "admin" ? (
              <>
                <h3 className="text-2xl font-semibold my-12 text-black">
                  Admin Dashboard
                </h3>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/manageClasses">
                    <FaTools></FaTools> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/manageUsers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : users === "instructor" ? (
              <>
                <h3 className="text-2xl font-semibold my-12 text-black">
                  Instructor Dashboard
                </h3>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/addAClass">
                    <FaSchool></FaSchool> Add A Class
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/instructorClasses">
                    <FaBook></FaBook> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold my-12 text-black">
                  Student Dashboard
                </h3>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/myClasses">
                    <FaSchool></FaSchool> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/home">
                    <FaBook></FaBook> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/dashboard/home">
                    <FaMoneyCheck></FaMoneyCheck> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink className="text-black hover:text-black hover:bg-slate-400" to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
