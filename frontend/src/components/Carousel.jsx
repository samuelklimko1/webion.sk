import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'; 

const Carousel = () => {
    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: 3, 
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,  
        focusOnSelect: true,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, 
                    centerMode: true,
                    focusOnSelect: true, 
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-slide">
                    <a href="https://instagram.com">
                        <img src="trion.png" alt="Slide 1" />
                    </a>
                </div>
                <div className="carousel-slide">
                    <a href="https://instagram.com">
                        <img src="pravnik.png" alt="Slide 2" />
                    </a>
                </div>
                <div className="carousel-slide">
                    <a href="https://instagram.com">
                        <img src="beautybytina.png" alt="Slide 3" />
                    </a>
                </div>
                <div className="carousel-slide">
                    <a href="https://instagram.com">
                        <img src="wearspse.png" alt="Slide 4" />
                    </a>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;