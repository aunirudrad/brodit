import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import banner1 from "../assets/slide01.jpg";
import banner2 from "../assets/slide02.jpg";
import banner3 from "../assets/slide03.jpg";

const VerticalSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        arrows: false
    };
    return (
        <div className='absolute w-full h-full object-cover' style={{ height: "100vh", overflow: "hidden" }}>
            <Slider {...settings}>
                <div>
                    <img src={banner1} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
                </div>

                <div>
                    <img src={banner2} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
                </div>

                <div>
                    <img src={banner3} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
                </div>
            </Slider>
        </div>
    );
};

export default VerticalSlider;