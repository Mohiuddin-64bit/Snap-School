import { BsFillPersonFill } from "react-icons/Bs";
import { MdOutlineAlternateEmail } from "react-icons/Md";
const TeacherCard = ({ teacher }) => {
  return (
    <div>
      <div className="">
        <div className=" mx-auto">
          <img
            className=" rounded-full shadow-2xl object-center h-[300px] w-full"
            src={teacher?.image}
            alt="photos"
          />
        </div>
        <div className="text-center mt-6">
          <h2 className="font-bold text-lg">{teacher?.name}</h2>
          <div className="flex items-center justify-center gap-2">
            <BsFillPersonFill></BsFillPersonFill>
            <p> {teacher?.instructorName}</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
          <p>{teacher?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
