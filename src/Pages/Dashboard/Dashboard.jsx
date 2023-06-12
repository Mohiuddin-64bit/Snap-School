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
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/usersE?email=${user.email}`)
      .then((res) => {
        const data = res.data;
        console.log();
        setUsers(data[0].role);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);


  return (
    <div>
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
        <div className="drawer-side bg-blue-400">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80">
            {users === "admin" ? (
              <>
                <h3 className="text-2xl font-semibold my-12 ">
                  Admin Dashboard
                </h3>
                <li>
                  <NavLink to="/dashboard/manageClasses">
                    <FaTools></FaTools> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : users === "instructor" ? (
              <>
                <h3 className="text-2xl font-semibold my-12 ">
                  Instructor Dashboard
                </h3>
                <li>
                  <NavLink to="/dashboard/">
                    <FaSchool></FaSchool> Add A Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/">
                    <FaBook></FaBook> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold my-12 ">
                  Student Dashboard
                </h3>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <FaSchool></FaSchool> My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaBook></FaBook> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaMoneyCheck></FaMoneyCheck> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/menu"> Our Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">Order Food</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
