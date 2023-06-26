import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit} from "react-icons/fa";

const MyClasses = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allClass").then((res) => {
      const data = res.data;
      setDatas(data);
    });
  }, []);
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th></th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>FeedBack</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item, index) => (
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
                <td>{item.instructorName}</td>
                <td className="">{item.availableSeats}</td>
                <td>${item.price}</td>
                <td>{item.status}</td>
                <td></td>
                <td>
                  <button className="btn btn-ghost bg-gray-900 text-white">
                    <FaEdit></FaEdit>
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
