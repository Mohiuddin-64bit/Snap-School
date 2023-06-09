import axios from "axios";
import { useEffect, useState } from "react";


const Instructor = () => {
  const [instructor, setInstructor] = useState([])
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
<div className="container mx-auto mt-12">
      {instructor.map((cl) => (
        <div key={cl._id}>
          <div className="card flex items-center gap-3 mb-12 lg:card-side bg-base-100 shadow-xl">
            <figure className="w-32">
              <img src={cl.photo} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cl.name}</h2>
              <h2 className="text-lg text-gray-500">{cl.email}</h2>
              <p className="font-semibold">Class Taken: {cl.classesTaken}</p>
            </div>  
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;