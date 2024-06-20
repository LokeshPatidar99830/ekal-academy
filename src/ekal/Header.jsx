



import React, { useState } from 'react';
import Ekal from '../image/EkalLogo.jpg';
import { MdDashboard } from "react-icons/md";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className='mt-4 '>
      <div className='flex sm:flex-row flex-col '>
        <div className=' flex flex-col sm:flex sm:flex-row'>
        <div className='flex flex-row '>
          <img className='w-24 h-20 sm:ml-10 ml-5' src={Ekal} alt="Ekal" />
          <div className='font-medium sm:pt-6 pt-8 sm:pl-9 pl-44 flex flex-row  '>
            <MdDashboard onClick={toggleCategoryMenu} className='mt-1 mr-1 cursor-pointer' />
            <h3 className='cursor-pointer' onClick={toggleCategoryMenu}>Category</h3>
          </div>
        </div>
        <div className={`flex flex-row font-medium sm:mt-4 mt-1 pt-1 sm:ml-40 sm:pl-80 sm:space-x-4   space-x-3  ${isCategoryOpen ? 'block' : 'hidden sm:flex '}`}>
          <span className='py-2 sm:py-0'>Home</span>
          <span className='py-2 sm:py-0'>All Courses</span>
          <span className='py-2 sm:py-0'>Career Mentorship</span>
          <span className='py-2 sm:py-0'>Free Assignment</span>
          <span className='py-2 sm:py-0'>Upcoming Events</span>
        </div>
        </div>
      
      <button className=' bg-red-500 text-white rounded-md sm:h-10  h-10 sm:w-32 w-24 sm:mt-3  mt-4 sm:ml-7  ml-40 '>Sign up</button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
