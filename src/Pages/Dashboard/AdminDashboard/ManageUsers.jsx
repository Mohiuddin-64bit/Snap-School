import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Admin!",
            "Your Role of this website has been changed Successfully",
            "success"
          );
          console.log(data);
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            "Instructor!",
            "Your Role of this website has been changed Successfully",
            "success"
          );
          console.log(data);
        }
      });
  };

  const handleDelete = (user) => {
    axios.delete(`http://localhost:5000/users/${user._id}`).then(() => {
      refetch();
      Swal.fire(
        "Deleted!",
        "User Account Deleted Successfully",
        "success"
      );
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>Snap School | Manage User</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <div className="flex items-center gap-3">
                      <button className="btn btn-ghost btn-disabled text-black bg-slate-300">
                        Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-blue-600 text-white"
                      >
                        Instructor
                      </button>
                    </div>
                  ) : user.role === "instructor" ? (
                    <div className="flex items-center gap-3">
                      <button className="btn btn-ghost btn-disabled text-black bg-slate-300">
                        Instructor
                      </button>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost bg-orange-600 text-white"
                      >
                        Admin
                      </button>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost mr-3 bg-orange-600 text-white"
                      >
                        Admin
                      </button>
                      <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost bg-blue-600 text-white"
                      >
                        Instructor
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
