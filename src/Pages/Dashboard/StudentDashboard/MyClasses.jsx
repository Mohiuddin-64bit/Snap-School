import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaMoneyBillWave, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [cls, setCls] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`https://snap-school-server-kappa.vercel.app/selectedClass?email=${user?.email}`)
      .then((res) => {
        setCls(res.data);
        console.log(res.data);
      });
  }, [user]);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://snap-school-server-kappa.vercel.app/selectedClass/${item._id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              setCls((prevCls) =>
                prevCls.filter((clsItem) => clsItem._id !== item._id)
              );

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th></th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cls.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td className="text-end">${item.instructor}</td>
                <td>
                  <Link to="../payment">
                    <button className="btn btn-ghost bg-blue-500 mr-3 text-white">
                      <FaMoneyBillWave></FaMoneyBillWave>Pay
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-orange-600  text-white"
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

export default MyClasses;
