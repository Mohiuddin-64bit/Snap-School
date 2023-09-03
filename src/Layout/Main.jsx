import "../index.css"
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

// import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
  return (
    <div className='dark:bg-background2 bg-center bg-cover bg-no-repeat bg-white'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer ></Footer>
    </div>
  );
};
// bg-white dark:bg-gray-900 

export default Main;