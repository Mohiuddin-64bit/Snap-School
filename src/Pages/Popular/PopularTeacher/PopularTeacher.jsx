import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import TeacherCard from "./TeacherCard";

const PopularTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/popularTeacher")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);



  return (
    <div>
      <SectionTitle
        heading={"Popular Instructors"}
        subHeading={"All Best Instructors"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-4 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 mb-32 ">
        {teachers.map(teacher => <TeacherCard key={teacher._id} teacher={teacher}></TeacherCard>)}
      </div>
    </div>
  );
};

export default PopularTeacher;
