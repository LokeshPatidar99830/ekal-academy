import React from 'react'
import img1 from '../image/img1.jpeg'
import { HiOutlinePlusCircle } from "react-icons/hi";

const Frequently = () => {
  return (
    <div className=' md:p-10 p-3'>
        <div className=' md:w-[200vh] w-96 grid justify-items-center '>
        <div className='grid justify-items-center text-center '>
            <div><h1 className=' md:text-xl text-base font-bold text-black pt-5 '>Frequently asked questions</h1></div>
            <div><h2 className=' md:text-sm text-xs font-medium text-gray-500 my-4'>Everythinh you need to know about the product and bikking</h2></div>
        </div>

        <div className=' pt-2 '>
<div className=' flex flex-row border-b-2 md:text-sm text-xs border-gray-300  pb-5'><h1 className=' sm:w-[41rem]  w-72'>How will my donation be used and distributed?</h1>
       <h2 className=' pt-1 text-orange-500'><HiOutlinePlusCircle /></h2></div>
<div className=' flex flex-row border-b-2 md:text-sm text-xs border-gray-300  pb-5 pt-2'><h1 className='sm:w-[41rem] w-72'>Do we get a tax benefit?</h1> 
       <h2 className=' pt-1 text-orange-500'>< HiOutlinePlusCircle /></h2></div>
<div className=' flex flex-row border-b-2 md:text-sm text-xs border-gray-300  pb-5 pt-2'><h1 className='sm:w-[41rem] w-72'>How many widows lives have been impacted?</h1>
       <h2 className=' pt-1 text-orange-500'><HiOutlinePlusCircle /></h2></div>
<div className=' flex flex-row md:text-sm text-xs   pt-2'><h1 className='sm:w-[41rem] w-72'>What is there in grocery this?</h1>
       <h2 className=' pt-1 text-orange-500 '><HiOutlinePlusCircle /></h2></div>
        </div>
        
        </div>


<div className=' pt-10 md:w-[200vh] grid justify-items-center'>
        <div className=' flex flex-row'>
<div><img className=' rounded-full h-10 w-10' src={img1} alt="" /></div>
<div><img className=' rounded-full h-10 w-10' src={img1} alt="" /></div>
<div><img className=' rounded-full h-10 w-10' src={img1} alt="" /></div></div>
<div className=' pt-5'><h1 className=' font-bold'>Still have questions?</h1></div>
<div className=' pt-2 md:text-sm text-xs font-medium text-gray-500'>
        <h1>Can't find the answer your's looking for ?</h1></div>
<div className=' pt-6'><button className=' text-base text-gray-100 h-7 w-28 border-none pb-1
           rounded-md border-2  border-transparent  bg-red-600'>Get in touch</button></div>

        </div>
      
    </div>
  )
}

export default Frequently
