import { MdEventSeat } from "react-icons/Md";
import { PiStudentFill } from "react-icons/Pi";
import { BsCashCoin } from "react-icons/Bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const PopularClassCard = ({ popularClass }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          // Responsive breakpoints
          1024: {
            slidesPerView: 3, // 3 slides per view on screens larger than 1024px (e.g., desktop)
          },
        }}
        className="mySwiper"
      >
        {popularClass.map((classes) => (
          <SwiperSlide key={classes.id}>
            <div key={classes._id}>
              <div className="mx-auto max-w-screen-2xl  shadow-xl aspect-[4/2] w-full relative rounded-t-xl">
                <img
                  src={classes.image}
                  className="object-cover rounded-t-xl h-full w-full group-hover:scale-110 transition"
                  alt="classes"
                />
                <div className="px-3 flex flex-col justify-between ">
                  <div className="py-2 ">
                    <h2 className="text-xl font-bold">{classes.name}</h2>
                    <p className="text-sm text-gray-500">
                      {classes.instructorName}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-base flex items-center gap-1 font-semibold">
                      <MdEventSeat></MdEventSeat>
                      Available Seats: {classes.availableSeats}
                    </p>
                    <p className="text-base flex items-center gap-1 font-semibold">
                      <PiStudentFill></PiStudentFill>
                      Enrolled Students: {classes.enrolledStudents}
                    </p>
                    <p className="text-base flex items-center gap-1 font-semibold">
                      <BsCashCoin></BsCashCoin>
                      Price: ${classes.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularClassCard;
