import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Card({ heading, text, logo ,axis, from  }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // 20% of the component visible triggers the animation
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { [axis]: `${from}`, opacity: 0 }, // Fly in from the left
    visible: { [axis]: 0, opacity: 1, transition: { duration:.5, ease: 'inear' } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white h-[20rem] w-full h-full rounded-3xl hover:shadow-lg hover:shadow-gray-500 hover:shadow-4xl flex flex-col justify-center items-left gap-5 hover:bg-[#f3d00c] transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.4 }}
        className="bg-[#f3d00c] w-20 h-20 center ml-10 rounded-full flex items-center text-5xl"
      >
        {logo}
      </motion.div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-black font-bold px-5">{heading}</h1>
        <p className="text-xl px-5">{text}</p>
      </div>
    </motion.div>
  );
}

export default Card;
