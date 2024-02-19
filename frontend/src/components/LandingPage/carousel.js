"use client"

import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [centerIndex, setCenterIndex] = useState(1);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const getIndices = (index) => {
    const lastIndex = items.length - 1;
    const prevIndex = index - 1 < 0 ? lastIndex : index - 1;
    const nextIndex = index + 1 > lastIndex ? 0 : index + 1;
    return [prevIndex, index, nextIndex];
  };

  const [visibleIndices, setVisibleIndices] = useState(getIndices(centerIndex));

  const updateIndex = (newIndex) => {
    setCenterIndex(newIndex);
    setVisibleIndices(getIndices(newIndex));
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    setEndX(e.clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const threshold = 50; // Minimum swipe distance in pixels to trigger slide change
    if (startX - endX > threshold) {
      // Swipe left, next slide
      nextSlide();
    } else if (endX - startX > threshold) {
      // Swipe right, previous slide
      prevSlide();
    }
  };

  const nextSlide = () => {
    updateIndex((centerIndex + 1) % items.length);
  };

  const prevSlide = () => {
    updateIndex((centerIndex - 1 + items.length) % items.length);
  };

  return (
    <div
      className="flex items-center justify-center my-8 gap-4 cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button onClick={prevSlide} className="p-4 bg-gray-200 rounded-full select-none">Prev</button>
      {visibleIndices.map((index) => (
        <div
          key={index}
          className={`w-48 h-48 flex items-center justify-center transition-transform duration-300 ease-in-out ${index === centerIndex ? 'scale-125' : 'scale-100'} select-none`}
        >
          {items[index]}
        </div>
      ))}
      <button onClick={nextSlide} className="p-4 bg-gray-200 rounded-full select-none">Next</button>
    </div>
  );
};

export default Carousel;


