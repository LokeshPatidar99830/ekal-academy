import React from 'react'
import { FaPlay } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import img2 from '../image/img2.png';
import bgimage from '../image/background.jpg';
import circle from '../image/chakri.png'

const FirstPart = () => {
  return (
    <>

    <div className='sm:flex sm:flex-row justify-center '>
    <img className=' w-24 h-24 sm:relative hidden sm:block   text-left   sm:mr-10 ' src={circle} alt="circle" />

     <div className='sm:pr-3 sm:mr-3  px-3 mx-3 sm:w-[34rem] w-96 sm:pt-16 '>
     <div className=' flex flex-row text-purple-600  bg-purple-200 rounded-md  w-60  h-8  my-5 text-center pl-2 pt-1'>
     <SiTicktick  className=' mt-1 mr-2'/>
        Carrer Mentorship Program</div>
     <h3 className=' text-gray-400 text-2xl font-semibold '>For Class 9th-12th Students</h3>
     <div className='  text-5xl font-semibold mb-6  '>
     Online <b className='  text-blue-600 font-bold'>Learning  <br /> you can acess </b> any  where easily!
     </div>
     <p className='text-gray-500  '>Find the  ideal Carrer Path with the  Correct Assessment and Mentorship.
     With the aid of our professional carrer counselors and scientific carrer
    guidance tools,nake informed selections.    </p>
    <div className=' flex flex-row  font-medium  py-3 my-3'>
       <div className=' pr-4 mr-4 bg-yellow-400 sm:w-40 w-36 h-12 text-center pt-2 rounded-lg cursor-pointer'>JOIN COURSE</div>
       <div className='pt-2 flex flex-row'>
        <div className=' bg-blue-600 text-white  rounded-full w-7 h-7  px-2  py-2 mr-2 cursor-pointer'> <FaPlay  className=' w-3 h-3 '/></div>
        See how it works ?</div>
      </div>
    </div> 
    <div>
        <img className='  w-[34rem] h-[34rem] pt-1 my-3' src={img2} alt="img2" />
    </div>
    </div>
    <div className=' bg-cover text-white  flex flex-row justify-center   space-x-10  h-24  pt-2 ' style={{backgroundImage:`url(${bgimage})`}}>
     <div className=' flex flex-col font-bold  pt-4 '>150+ <p>Total courses</p></div> <hr className='  w-1 h-20   bg-slate-200' />
     <div className=' flex flex-col text-center font-bold pt-4 '>250 <p>Total Instructor  </p></div> <hr className='  w-1 h-20   bg-slate-200' />
     <div className=' flex flex-col font-bold pt-4 '>35K <p>Total Students</p></div> 
    </div>
    </>
  )
}

export default FirstPart
