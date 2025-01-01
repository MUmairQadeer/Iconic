import React, { useState, useEffect } from 'react';


import { motion, AnimatePresence } from 'framer-motion';

export const Ani = () => {
  const [index, setIndex] = useState(0);
  const words = ['Business', 'Growth'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500); // Change the interval time here

    return () => clearInterval(intervalId);
  }, []);

  const wordVariants = {
    enter: {
      y: '100%', // Start from below
      opacity: 0,
    },
    center: {
      y: '0%', // Move to center
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
    exit: {
      y: '-100%', // Move up and out
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="text-4xl text-white font-extrabold py-5">
      <span>Your All In One
      <span className="relative inline-block w-44">
        <AnimatePresence mode="wait">
          <motion.span
            key={index} // Ensure Framer Motion knows this is a new element
            className="text-[#f3d00c] relative  mb- flex items-center justify-center" 
            variants={wordVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span> Partner</span> </span>
    </div>
  );
};





export function Ani2() {
  const lines = [
    'Web Design And Development',
    'UI & UX Design',
    'Content & Copywriting',
    'Social Media Marketing',
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const typingSpeed = 100; // Speed of typing each letter
  const erasingSpeed = 40; // Speed of erasing each letter
  const delayBetweenLines = 1000; // Delay before switching to the next line

  useEffect(() => {
    let timeoutId;

    if (!isErasing && displayText.length < lines[index].length) {
      // Typing effect
      timeoutId = setTimeout(() => {
        setDisplayText(lines[index].slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isErasing && displayText.length > 0) {
      // Erasing effect
      timeoutId = setTimeout(() => {
        setDisplayText(lines[index].slice(0, displayText.length - 1));
      }, erasingSpeed);
    } else if (!isErasing && displayText.length === lines[index].length) {
      // Wait before erasing
      timeoutId = setTimeout(() => setIsErasing(true), delayBetweenLines);
    } else if (isErasing && displayText.length === 0) {
      // Move to the next line
      setIsErasing(false);
      setIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isErasing, index, lines]);

  return (
    <div className="text relative mb-20 py-3 my-5 pointer-events-auto">
      <p className="text-2xl text-white font-bold">
        Our Service <span className="text-[#f3d00c]">{displayText}</span>
      </p>
    </div>
  );
}


