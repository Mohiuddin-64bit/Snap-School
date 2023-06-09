import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allClass")
      .then((res) => {
        const data = res.data;
        setClasses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(classes);
  return (
    <div className="container mx-auto mt-12">
      {classes.map((cl) => (
        <div key={cl._id}>
          <div className="card flex items-center gap-3 mb-12 lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={cl.image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cl.name}</h2>
              <h2 className="text-lg text-gray-500">{cl.instructor}</h2>
              <div className="font-semibold">
                <p>{cl.description}</p>
                <p>Available Seat: {cl.availableSeats}</p>
                <p>Enrolled: {cl.enrolledStudents}</p>
                <p>Price: {cl.price}</p>
              </div>
              <div className="card-actions justify-end">
                {user ? (
                  <>
                    {cl.availableSeats > 0 ? (
                      <button className="btn btn-primary ">Select</button>
                    ) : (
                      <button className="btn bg-gray-300 text-white btn-disabled">
                        Select
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    <button className="btn bg-gray-300 text-white btn-disabled">
                      Select
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
