import axios from "axios";
import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
  const [popularClass, setPopularClasses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/popularClass")
      .then((res) => {
        const data = res.data;
        setPopularClasses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <SectionTitle
        heading={"Popular Class"}
        subHeading={"All Top Rated Course"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-4 mx-auto container ">
        {popularClass.map((classes) => (
          <ClassCard key={classes._id} classes={classes}></ClassCard>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
