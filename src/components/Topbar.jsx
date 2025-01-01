import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";




function Topbar() {
  return (
    <div className='h-12 bg-[#171a1e] w-full flex justify-between text-white shadow-md'>
      <div>
        <p className='text-xl p-2 mx-8'>Phone: <span className='hover:text-[#f3d00c] cursor-pointer '> +44 759 693 1512</span></p>
      </div>
      <div className="icons flex justify-center items-center mx-10 px-3">
  <ul className="flex  gap-5 font-xl">
    <li className="flex flex-row items-center cursor-pointer group">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#33373d] group-hover:bg-yellow-500">
        <span className="text-white group-hover:text-black">
          <FaFacebook />
        </span>
      </div>
      <p className="ml-2 text-white group-hover:text-[#f3d00c]">Facebook</p>
    </li>
    <li className="flex flex-row items-center cursor-pointer group">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#33373d] group-hover:bg-yellow-500">
        <span className="text-white group-hover:text-black">
          <AiFillInstagram />
        </span>
      </div>
      <p className="ml-2 text-white group-hover:text-[#f3d00c]">Instagram</p>
    </li>
    <li className="flex flex-row items-center cursor-pointer group">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#33373d] group-hover:bg-yellow-500">
        <span className="text-white group-hover:text-black">
          <FaLinkedin />
        </span>
      </div>
      <p className="ml-2 text-white group-hover:text-[#f3d00c]">Linkedlin</p>
    </li>
  </ul>
</div>

      
    </div>
  )
}

export default Topbar