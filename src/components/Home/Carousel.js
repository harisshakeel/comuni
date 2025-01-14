// components/Carousel.js
"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const images = [
    "/slide1.jpeg", // Replace with your image paths
    "/slide2.jpeg",
    "/slide3.jpeg",
  ];

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        emulateTouch
        showArrows={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "80vh",
                objectFit: "cover",
                margin: 0,
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
