import React from 'react'
import { IoStar } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Profile from '../image/Profile.png';



const MentorshipProgram = () => {
  return (
    <>
          <div className=' py-2 my-2  text-center  ' >
      <div className=' text-purple-500  '> Carrer Mentorship Program </div>
      <div className=' py-2 my-2 sm:text-5xl text-4xl font-semibold'>
      <h1>An All Inclusive Mentorship Program For <br/> The Perfect Head  Start </h1>
      
      </div>
      <div className='pb-2 mb-2'>
      <p> Is your child unsure about their carrer path ? eKal Academy's mentorship program offers carrer counselling, one-on-one <br />
      mentoring, and even industry expert guidance to help them find the right  fit.</p>
      </div>
      <div className=' flex flex-row  font-medium justify-center  py-3 my-3'>
       <div className=' px-4 mx-4 bg-yellow-400 sm:w-40 w-36 h-12 text-center pt-2 rounded-lg cursor-pointer'>JOIN COURSE</div>
       <div className='pt-2 flex flex-row'>
        <div className=' bg-blue-600 text-white  rounded-full w-7 h-7  px-2  py-2 mr-2 cursor-pointer'> <FaPlay  className=' w-3 h-3 '/></div>
        See how it works ?</div>
      </div>
      <div className=' flex flex-row text-orange-500 justify-center '>
       <button className=' px-2 mx-2'>Students</button>
       <button className=' px-2 mx-2' >Parents</button>
       <button className=' px-2 mx-2'>Schools</button>
      </div>
      <div className=' sm:flex sm:flex-row py-6 my-6 '>
       <div className=' flex flex-col text-left  rounded-lg  sm:w-[70rem] w-[22rem]  h-52  sm:pl-8 sm:ml-4 ml-4 text-xs  mb-8 sm:mb-0   shadow-[13px_13px_0px_0px_rgba(0,0,0)]'>
        <div className=' flex flex-row mb-2'>
        <img className=' rounded-full  w-24 h-20' src={Profile} alt="Profile" />
          <div className='flex flex-row  pt-6 mt-6   pl-28  ml-9 text-red-700'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          </div>
        </div>
        <p className='font-semibold  mb-2  text-base'>Website deign did exactly what you said it <br/>
         does. Just what I was looking for. Nice work <br /> on your website design.</p>
          <div className=' flex flex-row'>
            <div  className=' flex flex-col  font-semibold '>
              Drishti Ranjan
              <p className=' text-gray-400'>Students</p>
            </div>
            <div className='flex flex-row font-normal pl-20 ml-11    text-sm' >
             <div className='rounded-full bg-red-600  w-6 h-6 pr-2 mr-2'><FaThumbsUp  className='  mx-1  pt-1 text-white   w-4  h-4 mr-2  ' /></div>
             Testimonial 
            </div>
          </div>
       </div>

       <div className=' flex flex-col text-left  rounded-lg  sm:w-[100rem] w-[22rem]  h-72  sm:pl-8 sm:ml-8 ml-4 text-xs mb-8 sm:mb-0   shadow-[13px_13px_0px_0px_rgba(0,0,0)]'>
        <div className=' flex flex-row mb-2'>
        <img className=' rounded-full  w-24 h-20' src={Profile} alt="Profile" />
          <div className='flex flex-row  pt-6 mt-6   pl-28  ml-9 text-red-700'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          </div>
        </div>
        <p className='font-semibold  mb-2  text-base'>I will let my mum know about  this  she could really make use of this software ! 
        Very easy to use. sincce I invested in software I made over 100,00 dollars profile.
         I just can't get enough of software. I want to get a T-shirt with software on it  so I  can show it off to everyone.</p>
          <div className=' flex flex-row'>
            <div  className=' flex flex-col  font-semibold '>
              Drishti Ranjan
              <p className=' text-gray-400'>Students</p>
            </div>
            <div className='flex flex-row font-normal pl-20 ml-11    text-sm' >
             <div className='rounded-full bg-red-600  w-6 h-6 pr-2 mr-2'><FaThumbsUp  className='  mx-1  pt-1 text-white   w-4  h-4 mr-2  ' /></div>
             Testimonial 
            </div>
          </div>
       </div>

       <div className=' flex flex-col text-left  rounded-lg  sm:w-[70rem] w-[22rem]  h-52 sm:pl-8 sm:ml-8 ml-4 text-xs mb-8 sm:mb-0    shadow-[13px_13px_0px_0px_rgba(0,0,0)]'>
        <div className=' flex flex-row mb-2'>
        <img className=' rounded-full  w-24 h-20' src={Profile} alt="Profile" />
          <div className='flex flex-row  pt-6 mt-6   pl-28  ml-9 text-red-700'>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          </div>
        </div>
        <p className='font-semibold  mb-2  text-base'>Website deign did exactly what you said it <br/>
         does. Just what I was looking for. Nice work <br /> on your website design.</p>
          <div className=' flex flex-row'>
            <div  className=' flex flex-col  font-semibold '>
              Drishti Ranjan
              <p className=' text-gray-400'>Students</p>
            </div>
            <div className='flex flex-row font-normal pl-20 ml-11    text-sm' >
             <div className='rounded-full bg-red-600  w-6 h-6 pr-2 mr-2'><FaThumbsUp  className='  mx-1  pt-1 text-white   w-4  h-4 mr-2  ' /></div>
             Testimonial 
            </div>
          </div>
       </div>
       
      </div>
      <hr className='  h-1 bg-violet-800' />
    </div>

    </>
  )
}

export default MentorshipProgram
