import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularTeacher from "../../PopularTeacher/PopularTeacher";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularTeacher></PopularTeacher>
    </div>
  );
};

export default Home;
