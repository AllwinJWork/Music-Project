import React, { useState } from "react";
import "../Carousel/Carousel.css"


interface CarouselProps {
  items: string[];
}

function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <img key={index} src={item} alt={`Slide ${index + 1}`} className="carousel-image" />
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrevSlide}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
