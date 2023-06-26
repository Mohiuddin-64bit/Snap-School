import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/carousel-img/2.jpg";
import img2 from "../../../assets/carousel-img/1.jpg";
import img3 from "../../../assets/carousel-img/3.jpg";
import img4 from "../../../assets/carousel-img/4.jpg";
import img5 from "../../../assets/carousel-img/5.jpg";
import img6 from "../../../assets/carousel-img/6.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden lg:block">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
            <div className="absolute ml-3 w-3/4 transform top-1/3 left-14 text-white text-xl">
              <div>
                <p className="font-bold text leading-normal text-lg lg:text-6xl text-yellow-400">
                  Unlock Your Potential at our Summer
                  <br /> Camp Learning School
                </p>
                <p className="lg:w-2/4 hidden">
                  Explore a world of creativity and growth through our
                  specialized classes. Join us for a memorable summer filled
                  with learning, fun, and new friendships. Enroll today and
                  embark on an exciting journey of discovery in your chosen
                  category, e.g., Photography School
                </p>
                <button className="btn bg-blue-700 border-0 mt-5 text-white">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
