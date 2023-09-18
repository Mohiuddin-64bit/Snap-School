import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { MdEventSeat } from "react-icons/Md";
import { PiStudentFill } from "react-icons/Pi";
import { BsCashCoin } from "react-icons/Bs";
import { useNavigate } from "react-router-dom";

const ClassesCard = ({ cl }) => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate()
  const { name, instructor, description, price, _id, image, status } = cl;
  const handleSelect = () => {
    if (user) {
      const orderCourse = {
        courseId: _id,
        name,
        image,
        instructor,
        description,
        price,
        email: user.email,
      };
      axios
        .post("http://localhost:5000/selectedClass", orderCourse)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire("Good job!", "Course Selected", "success");
          }
          console.log(res.data);
        })
        .catch((error) => console.log(error.message));
    }
    else{
      navigation('/login')
    }
  };

  return (
    <div className="">
      {status === "Approved" ? (
        <>
          <div className="">
            <div className="mx-auto flex max-w-screen-2xl hover:bg-slate-100 dark:hover:bg-slate-900 m-9 shadow-xl w-full relative rounded-xl">
              <img
                src={cl.image}
                className="object-cover rounded-l-lg w-56 transition"
                alt="classes"
              />
              <div className="px-3 pb-4 text-black dark_mode_text  flex-col">
                <div className="py-2 ">
                  <h2 className="text-xl font-bold">{cl.name}</h2>
                  <p className="text-sm text-white dark:text-white/80">
                    {cl.instructorName}
                  </p>
                </div>
                <div className="">
                  <p className="text-base flex items-center gap-1 font-semibold">
                    <MdEventSeat></MdEventSeat>
                    Available Seats: {cl.availableSeats}
                  </p>
                  <p className="text-base flex items-center gap-1 font-semibold">
                    <PiStudentFill></PiStudentFill>
                    Enrolled Students: {cl.enrolledStudents}
                  </p>
                  <p className="text-base flex items-center gap-1 font-semibold">
                    <BsCashCoin></BsCashCoin>
                    Price: ${cl.price}
                  </p>
                </div>
              <button onClick={handleSelect} className="btn_grad">Select</button>
              </div>
            </div>
            
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ClassesCard;
