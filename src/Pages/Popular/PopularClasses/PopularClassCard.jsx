import Aos from "aos";
import { useEffect } from "react";
import { MdEventSeat } from "react-icons/Md";
import { PiStudentFill } from "react-icons/Pi";
import { BsCashCoin } from "react-icons/Bs";

const ClassCard = ({ classes }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { image, instructorName, name } = classes;
  return (
    <div data-aos="fade-right">
      <div key={classes._id}>
        <div
          className="mx-auto max-w-screen-2xl rounded-b-lg shadow-xl aspect-square 
            w-full 
            relative    
            rounded-t-xl"
        >
          <img
            src={image}
            className="object-cover rounded-t-xl h-full w-full group-hover:scale-110 transition"
            alt="classes"
          />
          <div className="px-3 flex flex-col justify-between ">
            <div className="py-2 ">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-sm text-gray-500">{instructorName}</p>
            </div>
            <div className="">
              <p className="text-base flex items-center gap-1 font-semibold">
                <MdEventSeat></MdEventSeat>
                Available Seats: {classes.availableSeats}
              </p>
              <p className="text-base flex items-center gap-1 font-semibold">
                <PiStudentFill></PiStudentFill>
                Enrolled Students: {classes.enrolledStudents}
              </p>
              <p className="text-base flex items-center gap-1 font-semibold">
                <BsCashCoin></BsCashCoin>
                Price: ${classes.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
