import React , { useState } from 'react';
import { motion } from 'framer-motion';
import {Ani} from './Ani';
import {Ani2} from './Ani';

function Video() {
  
  return (
    <div className="h-screen w-full px-6 mt-5 relative z-0">
      <div className="img relative">
        <img src="img/mainbg.gif" alt="gif" className="w-full h-[80vh] rounded-3xl" />
      </div>

      <div className="onImg z-10  absolute inset-0 flex flex-col items-center justify-center text-center ">
       <Ani />

        <div className="text w-1/3 text-1xl py-5 text-semibold text-white pointer-events-auto">
          “Iconic Taskers delivers expert digital marketing, SEO, and social media solutions to boost your brand’s online presence and drive measurable growth.”
        </div>
       

        <div className="btn">
          <button className="bg-[#f3d00c] text-black px-8 py-3 mt-5 rounded-lg font-semibold shadow-lg hover:bg-[#f2c400] transition-all duration-300 text-bold pointer-events-auto">
            More Details
          </button>
        </div>

        <div className="mouse py-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 33"
            className="wp-dark-mode-bg-image relative z-10 bottom-0 w-6 h-10 text-white"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12v9c0 6.63 5.37 12 12 12s12-5.37 12-12v-9c0-6.63-5.37-12-12-12Zm0 2c5.557 0 10 4.443 10 10v9c0 5.557-4.443 10-10 10S2 26.557 2 21v-9C2 6.443 6.443 2 12 2Z"
              className="wp-dark-mode-bg-image fill-current text-white"
            ></path>
            <path
              d="M12.084 6.5a2.508 2.508 0 0 0-2.5 2.5c0 1.375 1.126 2.5 2.5 2.5 1.375 0 2.5-1.125 2.5-2.5s-1.125-2.5-2.5-2.5z"
              className="wp-dark-mode-bg-image fill-current text-white"
            ></path>
          </svg>
        </div>

        <Ani2 />
      </div>
    </div>
  );
}

export default Video;
