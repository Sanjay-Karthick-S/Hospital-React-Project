import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Carousel, Image } from 'react-bootstrap';
import hospital from "../assets/images/sethu-hospital-jaihindpuram-madurai.avif";
import inside from '../assets/images/kabilan-hospital-jaihindpuram.avif';
import defhos from "../assets/images/default-hospitals-10.jpg";
const Home = () => {
  return (
    <div>
        <Header/>
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 object-fit-cover"
                        src={hospital}
                        height={500}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sethu Hospital Exterior</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={inside}
                        height={500}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Hospital interior</h3>
                        <p>It's a busy hospital.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={defhos}
                        height={500}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Resourceful Doctors</h3>
                        <p>The doctors will help the patients in all possible ways.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;