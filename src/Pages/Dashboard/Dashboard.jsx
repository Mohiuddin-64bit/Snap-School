import {  NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaSchool,FaMoneyCheck } from 'react-icons/fa';
const Dashboard = () => {
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
          <h3 className="text-2xl font-semibold my-12 ">Student Dashboard</h3>
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
