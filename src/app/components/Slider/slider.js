"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider({ images }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div style={{ width: "100%", paddingBottom: "30px" }}>
      <Slider {...settings}>
        {images.map((imgUrl, index) => (
          <div key={index}>
             <img 
               src={imgUrl} 
               alt={`Product view ${index + 1}`} 
               style={{ width: "100%", height: "400px", objectFit: "contain", margin: "0 auto" }} 
             />
          </div>
        ))}
      </Slider>
    </div>
  );
}