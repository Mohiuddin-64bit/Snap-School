import { BsFillPersonFill } from "react-icons/Bs";
import { MdOutlineAlternateEmail } from "react-icons/Md";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const TeacherCard = ({ teachers }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
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
        {teachers.map((teacher) => (
          <SwiperSlide key={teacher._id}  >
            <div className="mb-12 background rounded-t-[150px] rounded-b-lg pb-5 hover_bg">
              <div className=" mx-auto">
                <img
                  className=" rounded-full shadow-2xl object-center h-[300px] w-full"
                  src={teacher?.image}
                  alt="photos"
                />
              </div>
              <div className="text-center mt-6 ">
                <div className="flex items-center justify-center gap-2">
                  <BsFillPersonFill></BsFillPersonFill>
                  <h2 className="text-white dark:text-white text-lg font-bold"> {teacher?.instructorName}</h2>
                </div>
                {/* <p className=" text-white dark:text-white ">{teacher?.name}</p> */}
                <div className="flex items-center justify-center gap-1">
                  <MdOutlineAlternateEmail></MdOutlineAlternateEmail>
                  <p className="text-white dark:text-white">{teacher?.email}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeacherCard;
