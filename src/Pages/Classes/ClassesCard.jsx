import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ClassesCard = ({ cl }) => {
  const { user } = useContext(AuthContext);
  const {name, instructor, description, price, _id, image} = cl

  const handleSelect = (item) => {
    if (user && user.email) {
      const orderCourse = {courseId: _id, name, image, instructor, description, price, email: user.email}
      axios
        .post("http://localhost:5000/selectedClass", orderCourse)
        .then((res) => {
          if(res.data.insertedId){
            Swal.fire(
              'Good job!',
              'Course Selected',
              'success'
            )
          }
          console.log(res.data)
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <div>
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
                  <button
                    onClick={() => handleSelect(cl)}
                    className="btn btn-primary "
                  >
                    Select
                  </button>
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
  );
};

export default ClassesCard;
