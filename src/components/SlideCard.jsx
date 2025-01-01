import React from 'react'
import { FiClock } from "react-icons/fi";
import { motion } from 'framer-motion';
function SlideCard({heading,text}) {
  return (
    <motion.div
  
     className='Card flex flex-col gap-2 w-1/4 h-[30vh] items-center justify-end 
    '>
        <div className="bg-[#f3d00c] w-16 h-16 rounded-full text-3xl
         flex items-center justify-center ">
            <FiClock className=''/>
        </div>
        <h3 className='text-2xl'> {heading} </h3>
        <p>{text} </p>
    
    </motion.div>
  )
}

export default SlideCard