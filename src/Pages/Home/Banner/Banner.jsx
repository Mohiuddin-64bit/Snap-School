import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/carousel-img/2.jpg';
import img2 from '../../../assets/carousel-img/1.jpg';
import img3 from '../../../assets/carousel-img/3.jpg';
import img4 from '../../../assets/carousel-img/4.jpg';
import img5 from '../../../assets/carousel-img/5.jpg';
import img6 from '../../../assets/carousel-img/6.jpg';


const Banner = () => {
    return (
      
        <Carousel className='container mx-auto h-52'>

            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>

        </Carousel>
    );
};

export default Banner;