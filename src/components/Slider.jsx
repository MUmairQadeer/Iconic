import React, { useState, useEffect } from 'react';
import SlideCard from './SlideCard';
import { motion } from 'framer-motion';

function Slider() {
  const heading = ['Quality Services', 'On Time Delivery', '100% Trustworthy'];
  const text = ['Your deadlines is for sure our priority. We meet your deadlines with confidence.', 
    'Discover a new and unparallel standard of quality services.Quality that speaks for itself',

     'Trust thats earned, not given.We re dedicated to protecting your interests, every step of the way.'];
  const icon = ['Slide 1', 'Slide 2', 'Slide 3'];
  const i =0;
  const totalSlides = 3; // Total number of slides
  const slideWidth = 35; // Slide width in percentage
  const animationDuration = 0.5; // Duration for each slide transition
  const delay = 1.5; // Delay between transitions

  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active index periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, (animationDuration + delay) * 1000);

    return () => clearInterval(interval);
  }, [animationDuration, delay, totalSlides]);

  // Calculate visible slides for wrapping
  const getVisibleSlides = () => {
    return Array.from({ length: totalSlides }).map((_, i) => {
      const index = (i + activeIndex) % totalSlides;
      return index;
    });
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="w-full h-screen flex flex-col gap-8 ">
      <h2 className="text-3xl font-extrabold text-center text-black">
        What makes us your best choice?
      </h2>

      {/* Slider Container */}
      <div className="sliderContainer w-full h-1/2 flex flex-row items-center justify-center"> 
      <motion.div
        initial={{ x: "0%" }}
        animate={{
          x: `-${activeIndex * slideWidth}%`,
        
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeInOut',
        }}
        className="card-container flex flex-row gap-10 px-10 justify-between  "
      >
        {visibleSlides.map((index, i) => (
         
          <SlideCard key={i} index={index} heading={heading[i]} text={text[i]} icon={icon[i]}  />
        ))}
      </motion.div>
        </div>
      {/* Dots Navigation */}
      <div className="dots flex flex-row gap-2 w-full justify-center">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => setActiveIndex(index)} // Allow manual navigation
            animate={{
              scale: activeIndex === index ? 1.5 : 1, // Highlight the active dot
            }}
            transition={{
              duration: 0.3,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
