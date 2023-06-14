import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import TeacherCard from "./TeacherCard";

const PopularTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("https://snap-school-server-kappa.vercel.app/popularTeacher")
      .then((res) => {
        console.log(res.data);
        setTeachers(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  console.log(teachers)


  return (
    <div>
      <SectionTitle
        heading={"Popular Instructors"}
        subHeading={"All Best Instructors"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-4 mx-auto container mb-32 ">
        {teachers.map(teacher => <TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>)}
      </div>
    </div>
  );
};

export default PopularTeacher;
