import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CarouselComponent2 = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full flex items-center max-w-2xl justify-center  rounded-lg">
      <FiChevronLeft
        className="absolute left-5 text-secondary text-[1.8rem] cursor-pointer"
        onClick={prevSlide}
      />
      <div className="text-[1.3rem] text-secondary font-[600]">

        {/* Render the image using the currentSlide index */}
        <img
          src={slides[currentSlide]} // Correctly access the imgSrc based on the currentSlide index
          alt={slides[currentSlide].content} // Use content for the alt text
          className="w-full  h-[320px] object-cover rounded-lg"
        />
      </div>
      <FiChevronRight
        className="absolute right-5 text-secondary text-[1.8rem] cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default CarouselComponent2;
