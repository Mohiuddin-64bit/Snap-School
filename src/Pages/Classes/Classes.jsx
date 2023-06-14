import axios from "axios";
import { useEffect, useState } from "react";

import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("https://snap-school-server-kappa.vercel.app/allClass")
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
      {classes.map((cl) => (
        <ClassesCard key={cl._id} cl={cl}></ClassesCard>
      ))}
    </div>
  );
};

export default Classes;
