import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (

        <nav className='flex justify-between  px-10  sticky top-0 z-40 bg-white '>
            <div className="logo w-40 cursor-pointer mt-7">
                <img src="img/logo.png" alt="logo" />
            </div>
            <div className="list">
                <ul className='flex gap-14 mt-8'>
                    {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) =>
                        <li key={index} className='text-[#666666] cursor-pointer
                          decoration-transparent font-medium hover:underline 
                          hover:underline-offset-[12px] hover:decoration-[#f3d00c] hover:decoration-[3px]
                           hover:text-black font-xl cursor-pointer transition-all duration-300  '>
                            <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-[12px] text-black decoration-[#f3d00c]  decoration-[3px]' : ''} to={index === 0 ? '/' : `/${item.toLowerCase()}`}  >{item} </NavLink>
                        </li>)
                    }</ul>
            </div>
            <div className="btn mt-7">
                <button className="bg-[#f3d00c] text-black px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#f2c400] transition-all duration-300" > Contact
                </button>

            </div>
        </nav>


    )
}

export default Navbar