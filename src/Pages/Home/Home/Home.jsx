import PopularClasses from "../../Popular/PopularClasses/PopularClasses";
import PopularTeacher from "../../Popular/PopularTeacher/PopularTeacher";
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
