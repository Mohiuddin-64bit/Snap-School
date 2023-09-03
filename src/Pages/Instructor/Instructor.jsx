import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/Bs";
import { MdOutlineAlternateEmail } from "react-icons/Md";
import { CiMonitor } from "react-icons/Ci";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allInstructor")
      .then((res) => {
        const data = res.data;
        setInstructor(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="container mx-auto mt-12 grid grid-cols-2 gap-12">
      {instructor.map((cl) => (
        <div key={cl._id} className="">
          <div className="flex items-center gap-3 mb-12 rounded-lg shadow-xl">
            <img
              src={cl.photo}
              className="w-[200px] rounded-l-lg h-[150px] object-cover"
              alt="photos"
            />
            <div>
              <div className="flex items-center gap-1">
                <BsFillPersonFill></BsFillPersonFill>
                <h2 className="text">{cl.name}</h2>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
                <h2 className="text-lg text">{cl.email}</h2>
              </div>
              <div className="flex items-center gap-1">
                <CiMonitor></CiMonitor>
                <p className="font-semibold text">
                  Class Taken: {cl.classesTaken}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
