import axios from "axios";
import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClassCard from "../PopularClasses/PopularClassCard";
import Aos from "aos";
import "aos/dist/aos.css"

const PopularClasses = () => {
  useEffect(() => {
    Aos.init();
  });
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
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <PopularClassCard
          key={popularClass._id}
          popularClass={popularClass}
        ></PopularClassCard>
      </div>
    </>
  );
};

export default PopularClasses;
