import axios from "axios";
import { useEffect, useState } from "react";

import ClassesCard from "./ClassesCard";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);
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
  
  return (
    <div className="container mx-auto mt-12">
      <Helmet title="Snap School | Classes"></Helmet>
      {classes.map((cl) => (
        <ClassesCard key={cl._id} cl={cl}></ClassesCard>
      ))}
    </div>
  );
};

export default Classes;
