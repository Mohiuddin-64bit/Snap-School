import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const [allData, setAllData] = useState([]);
  console.log(allData);
  useEffect(() => {
    axios.get("http://localhost:5000/carousels").then((res) => {
      const data = res.data;
      setAllData(data);
    });
  }, []);

  return (
    <>
      <Carousel className="my-6 container">
        {allData.map((data) => (
          <div key={data._id} className="">
            <img className="rounded-lg relative" src={data.link} alt="" />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
