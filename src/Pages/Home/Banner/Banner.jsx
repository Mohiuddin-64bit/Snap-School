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
      <Carousel className="dark:bg-gray-900 bg-white mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {allData.map((data) => (
          <div key={data._id} className="">
            <img className="rounded-b-lg relative" src={data.link} alt="" />
          </div>
        ))}
      </Carousel>
    </>
  );
};
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default Banner;
