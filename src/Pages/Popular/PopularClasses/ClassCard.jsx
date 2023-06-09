import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const ClassCard = ({ classes }) => {
  const { image, instructor, name, availableSeats } = classes;
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div key={classes._id}>
        <div className="card mx-auto card-compact h-96 w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="classes" />
          </figure>
          <div className="card-body">
            <div className="py-1">
              <h2 className="card-title">{name}</h2>
              <p className="text-sm text-gray-500">{instructor}</p>
            </div>
            <p className="text-base font-semibold">
              Available Seats: {classes.availableSeats}
            </p>
            <p className="text-base font-semibold">
              Enrolled Students: {classes.enrolledStudents}
            </p>
            <p className="text-base font-semibold">Price: ${classes.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
