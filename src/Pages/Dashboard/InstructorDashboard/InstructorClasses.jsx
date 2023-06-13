import axios from "axios";
import { useEffect, useState } from "react";

const MyClasses = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allClass").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);
  console.log(data)
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Title</th>
            <th>Instructor Name</th>
            <th>Price</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((addClasses) => {
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{addClasses.name}</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
