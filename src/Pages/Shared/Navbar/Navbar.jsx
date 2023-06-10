import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };
  const menuOptions = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/instructor'>Instructors</Link>
      </li>
      <li>
        <Link to='classes'>Classes</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard </Link>
      </li>
      <li>
        <Link to="/signup">Signup </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="container mx-auto navbar bg-blue-700 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Snap School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">{menuOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-5">
                <div className="flex items-center">
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img
                        className="w-12 rounded-full"
                        src={user?.photoURL}
                        title={user?.displayName || user?.email}
                      />
                    </div>
                  </div>
                  <p className="font-bold lg:block hidden ml-4">
                    {user?.displayName || user?.email}
                  </p>
                </div>
                <button
                  className="btn bg-custom-gradient"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to='/login'><button className="btn bg-custom-gradient mr-3">LogIn</button></Link>
              <Link to='/signup'><button className="btn bg-custom-gradient">SignUp</button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
