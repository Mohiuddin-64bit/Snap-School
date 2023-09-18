import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

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
          <div key={data._id} className="relative">
            <img className="rounded-lg" src={data.link} alt="" />
            <div className="bg-slate-950 absolute w-full h-full top-0 left-0 opacity-50"></div>
            <div className="absolute top-[30%] sm:p-8 p-4 md:left-24 md:w-2/3 w-full text-left">
              <h2 className="lg:text-6xl md:text-4xl sm:text-2xl text-xl font-bold text-white text-left">
                Learning photography
              </h2>
              <div className="hidden sm:block">
                <p className="text-[16px] text-white  font-semibold my-8 hidden sm:block">
                  Learning a language has become easier than ever before with
                  the advent of online resources, language learning apps, and
                  interactive platforms that provide personalized learning
                  experiences.
                </p>
                <Link to="/signup">
                  {" "}
                  <button className="btn_grad">
                    {/* <BiUser className="mr-4 text-2xl text-white" /> */}
                    Join For Free
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
