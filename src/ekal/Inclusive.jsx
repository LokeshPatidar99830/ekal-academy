import React from 'react'
import img2 from '../image/img2.png'
import { MdOutlineDrafts } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { PiSquaresFourBold } from "react-icons/pi";

const Inclusive = () => {
  return (
    <div>
      <div className=' md:grid md:justify-items-center p-6 md:w-full w-96'>

        <div className=' grid justify-items-center md:w-full w-96'>
          <div><h1 className=' text-red-700 font-semibold'>All Inclusive</h1></div>
          <div><h1 className=' md:text-xl text-xs font-bold text-black pt-3'>Make The Initial Move Toward A Clear Professional Path!</h1></div>
          <div><h1 className=' md:text-sm text-xs font-medium text-gray-500 pt-3'>Identify Your Ideal Profession With Us, Using The Most
             Sophisticated Career Evaluation Tools And Experience In Existance</h1></div>
        </div>

<div className=' md:flex md:flex-row flex flex-col   space-x-28 md:pt-10 pt-5'>

  <div>

     <div className=' flex flex-row md:space-x-16 space-x-6 md:w-full w-96 '>

      <div className=' grid justify-items-center md:w-80 '>
        <div><h1 className=' text-blue-800 text-4xl'><MdOutlineDrafts /></h1></div>
        <div><h1 className=' md:text-base text-xs md:font-bold font-semibold text-black pt-1'>India's Most Reliable Career Test</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>

      
      <div className=' grid justify-items-center md:w-80 '>
        <div><h1 className=' text-blue-800 text-4xl'><RiFlashlightLine /></h1></div>
        <div><h1 className='md:text-base text-xs md:font-bold font-semibold text-black pt-1 '>Counselling By Trained Experts</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>


     </div>



     <div className=' flex flex-row md:space-x-16 space-x-6 pt-10 md:w-full w-96'>

      <div className=' grid justify-items-center md:w-80 w-44'>
        <div><h1 className=' text-blue-800 text-4xl'><MdOutlineBarChart /></h1></div>
        <div><h1 className=' md:text-base text-xs md:font-bold font-semibold text-black pt-1  '>India's Most Reliable Career Test</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>

      
      <div className=' grid justify-items-center md:w-80 w-44'>
        <div><h1 className=' text-blue-800 text-4xl'><FaRegSmile /></h1></div>
        <div><h1 className=' md:text-base text-xs md:font-bold font-semibold text-black pt-1 '>Counselling By Trained Experts</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>


     </div>



     <div className=' flex flex-row md:space-x-16 space-x-6 pt-10 md:w-full w-96'>

      <div className=' grid justify-items-center md:w-80 w-44'>
        <div><h1 className=' text-blue-800 text-4xl'><PiSquaresFourBold /></h1></div>
        <div><h1 className=' md:text-base text-xs md:font-bold font-semibold text-black pt-1 '>India's Most Reliable Career Test</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>

      
      <div className=' grid justify-items-center md:w-80 w-44'>
        <div><h1 className=' text-blue-800 text-4xl'><FiMessageCircle /></h1></div>
        <div><h1 className=' md:text-base text-xs md:font-bold font-semibold text-black pt-1 '>Counselling By Trained Experts</h1></div>
        <div className=''><p className=' text-xs text-gray-500 '>Prime Minister Shri Narendra Modi chaired a meeting to review the preparedness
           for cyclone “Remal” over North Bay of Bengal at his residence at 7, Lok Kalyan Marg earlier today. 
           likely to be normal and above normal in most parts of the country</p></div>
      </div>


     </div>

  </div>

  <div className=' md:pt-14 pt=8'>
    <img className=' md:h-96 md:w-96 h-36 w-36' src={img2} alt="" />
  </div>
</div>

      </div>
      <hr className='  h-1 bg-violet-800' />
    </div>
  )
}

export default Inclusive
