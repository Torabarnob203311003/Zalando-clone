import React from 'react'
import { RiGlobalLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
function Navbar() {
  return (
      <div> {/* Navbar */}
          <nav className="flex items-center justify-between px-8 py-4 ">
              <div className="ml-72 flex items-center space-x-4">
                  <a href="#" className="font-bold text-lg">Women</a>
                  <a href="#" className="font-bold text-lg bg-black text-white  p-2 pl-3 pr-3 ">Men</a>
                  <a href="#" className="font-bold text-lg">Kids</a>
              </div>

              <div className="flex-grow  flex justify-center">
                 <img src="zalando.png" alt="" />
              </div>

              <div className="flex mr-72 space-x-4">
                  <RiGlobalLine className=' text-3xl font-thin'/>
                  <FaRegUser className=' text-3xl font-thin' />
                  <FaRegHeart className=' text-3xl font-thin' />
                  <IoBagOutline className=' text-3xl font-thin' />

              </div>
          </nav></div>
  )
}

export default Navbar