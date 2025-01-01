import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Reusable hook for card animations
const useCardAnimation = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Start animation when 10% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls };
};

function Studies() {
  // Hook for each card
  const card1 = useCardAnimation();
  const card2 = useCardAnimation();
  const card3 = useCardAnimation();
  const card4 = useCardAnimation();
  const card5 = useCardAnimation();
  const card6 = useCardAnimation();

  // Dynamic card variant
  const cardVariant = (direction) => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? '-40%' : direction === 'right' ? '40%' : 0,
      y: direction === 'up' ? '-40%' : direction === 'down' ? '40%' : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  });

  return (
    <div className="w-full h-[200vh] flex flex-col mt-40 px-16 gap-5 relative bg-no-repeat bg-[url('img/serviceBg.svg')] bg-auto bg-center bg-left-top ">
      <div className="text flex flex-col h-1/5 items-center gap-2 justify-center
       px-72
      ">
        <span className="font-extrabold text-3xl pb-16 ">Services</span>
        <span className="font-semibold text-xl">FEATURED PROJECT</span>
        <span className="font-extrabold text-3xl">OUR CASE STUDIES</span>
        <p>
          Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet
          accumsan est pulvinar non. Praesent tristique enim lorem.
        </p>
      </div>

    <div className="aniSection w-full h-2/3 flex flex-col gap-10  "> 
      <div className="top w-full h-1/2 flex flex-row gap-10  ">
        <motion.div
          ref={card1.ref}
          initial="hidden"
          animate={card1.controls}
          variants={cardVariant('left')}
          className="h-full w-2/3 bg-[url(img/img1.jpg)] rounded-3xl"
        >
          <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
            <p className="text-white ml-8">Marketing</p>
            <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
          </div>
        </motion.div>

        <motion.div
          ref={card2.ref}
          initial="hidden"
          animate={card2.controls}
          variants={cardVariant('right')}
          className="h-full w-1/3 bg-[url(img/img2.jpg)] rounded-3xl"
        >
          <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
            <p className="text-white ml-8">Marketing</p>
            <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
          </div>
        </motion.div>
      </div>

      <div className="bottom flex flex-row gap-10 w-full h-1/2">
        <div className="left h-full w-2/3 flex flex-row gap-10">
          <motion.div
            ref={card3.ref}
            initial="hidden"
            animate={card3.controls}
            variants={cardVariant('down')}
            className="h-full w-full bg-green-500 bg-[url(img/img3.jpg)] rounded-3xl"
          >
            <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
              <p className="text-white ml-8">Marketing</p>
              <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
            </div>
          </motion.div>

          <motion.div
            ref={card4.ref}
            initial="hidden"
            animate={card4.controls}
            variants={cardVariant('down')}
            className="h-full w-full bg-green-500 bg-[url(img/img4.jpg)] rounded-3xl"
          >
            <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
              <p className="text-white ml-8">Marketing</p>
              <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
            </div>
          </motion.div>
        </div>

        <div className="right h-full flex flex-col w-1/3 gap-5">
          <motion.div
            ref={card5.ref}
            initial="hidden"
            animate={card5.controls}
            variants={cardVariant('right')}
            className="h-1/2 w-full bg-[url(img/img5.jpg)] rounded-3xl"
          >
            <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
              <p className="text-white ml-8">Marketing</p>
              <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
            </div>
          </motion.div>

          <motion.div
            ref={card6.ref}
            initial="hidden"
            animate={card6.controls}
            variants={cardVariant('right')}
            className="h-1/2 w-full bg-[url(img/img6.jpg)] rounded-3xl"
          >
            <div className="bg-black w-full h-full opacity-50 rounded-3xl hover:opacity-75 hover:transition-all hover:duration-300 flex flex-col justify-end">
              <p className="text-white ml-8">Marketing</p>
              <h1 className="text-white text-2xl font-bold mb-8 ml-8">Sit dapibus auctor</h1>
            </div>
          </motion.div>
        </div>
      </div>
</div>
      
    </div>
  );
}

export default Studies;
