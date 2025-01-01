import { AiFillApple } from "react-icons/ai";
import { GrAndroid } from "react-icons/gr";
import { IoShareSocialSharp } from "react-icons/io5";


import React from 'react'
import Card from './Card'
import { FaCode } from "react-icons/fa6";

function Services() {

  return (
    <div className='w-full h-screen flex flex-row px-10 gap-5  bg-no-repeat bg-[url("img/cardsBg.svg")] bg-right	 '>
      <div className="service   w-5/6   ">
      <div className="text px-10 flex flex-col h-full justify-center gap-5"> 
       <p className='text-black-400 text-2xl'>OUR SERVICES</p>
       <h1 className='text-2xl font-extrabold flex items-center px-5'>Power Up Your Business With Our Digital Services!</h1>
       <p>Fusce dignissim blandit justo, eget elementum risus tristique. Nunc lacus lacus, sit amet accumsan est pulvinar non. Praesent tristique enim lorem. Phasellus a auctor lacus proin vitae accumsan nunc.</p>
      
      <button className="bg-[#f3d00c] text-black px-4 py-3 mt-1 rounded-lg w-36 h-12 font-bold shadow-lg hover:bg-[#f2c400] transition-all duration-300 text-bold ">
            More Details
        </button>
        </div>
    </div>


      <div className="cards  w-full gap-2 flex flex-row gap-10  ">
       <div className="card1  w-full h-full flex flex-col gap-10 mb-20  ">
        <Card heading={'UX/UI Design'} text={'Fusce dignissim blandit justo, eget elementum.'} logo={<FaCode/>} axis={'y'}  from={'30vh'}  />
        <Card heading={'Marketing & SEO'} text={'Fusce dignissim blandit justo, eget elementum.'} logo={<IoShareSocialSharp/>} axis={'x'} from={'-100%'} />
        </div>

       <div className="card2  w-full h-full flex flex-col gap-10 mt-20 b">
       <Card heading={'Brand Identity'} text={'Fusce dignissim blandit justo, eget elementum.'} logo={<AiFillApple/>} axis={'y'} from={'-100%'} />
       <Card heading={'Web Development & Design'} text={'Fusce dignissim blandit justo, eget elementum.'} logo={<GrAndroid/>} axis={'x'} from={'100%'} />
       </div>
      </div>
    
    </div>
  )
}

export default Services