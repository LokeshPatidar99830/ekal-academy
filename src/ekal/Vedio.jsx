import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { MdOutlineLibraryBooks } from "react-icons/md";

const Vedio = () => {
  return (
    <div className=' grid justify-items-center'>
        

{/* 
<div className=' aspect-video ' >
    <iframe 
        className=' h-full w-full rounded-lg'
        src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
        width="100%" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
        > 
     </iframe>
</div>  */}



<div className=' grid justify-items-center p-0'>

    <div><h1 className='md:text-2xl text-base md:w-full  font-bold text-black pt-4'>Online Career Mentorship Program For Student</h1></div>

    <div className=' md:flex md:flex-row flex flex-col md:pt-10 md:space-x-28 '>
<div className=' space-y-7 grid justify-items-center pt-5'>
    <div><iframe className=' md:w-80 md:h-44 h-24 w-48 rounded-lg shadow-[10px_10px_rgba(45,85,255)]' src=" https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
    frameborder="0" allow=' '  title="YouTube video player" ></iframe></div>
    <div><iframe className=' md:w-80 md:h-44 h-24 w-48 rounded-lg shadow-[10px_10px_rgba(45,85,255)]' src=" https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
     frameborder="0" title="YouTube video player" ></iframe></div>
    <div><iframe className='md:w-80 md:h-44 h-24 w-48 rounded-lg shadow-[10px_10px_rgba(45,85,255)]' src=" https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528" 
    frameborder="0" title="YouTube video player" ></iframe></div>
</div>



<div className='  mt-8 sm:mt-12 '>

    <div className=' sticky drop-shadow-2xl   md:pb-10 pb-10  md:mb-10 mb-5 
    rounded-2xl border-2 shadow-2xl grid md:p-5 p-4 sm:h-[40rem] '>


<div >


            <div className='  flex justify-end '><h1><RxCross1 /></h1></div>


<div className=' grid justify-items-center'>
    <div><h1 className=' text-blue-800 text-6xl'><MdOutlineLibraryBooks /></h1></div>
    <div><h1 className=' md:text-xl text-base font-bold text-black pt-2'>Free Advisary</h1></div>
    <div><h1 className=' md:text-sm text-xs font-base text-gray-500 pt-1'>An All Inclusive Mentaing Program For The Perfect Start</h1></div>
</div>


<div className=''>
    <form action="">
        <div>
            <h1 className=' pt-8'>Student Name*</h1>
            <input
            className=' w-full bg-transparent border-b border-black outline-none focus:outline-none' 
            type="text" 
            placeholder=' Enter your name'/>
        </div>
        



       <div className=' flex flex-row pt-3 space-x-3'>

            <div><h1 className=''>Class*</h1>
            <input
            className='   bg-transparent border-b border-black outline-none focus:outline-none' 
            type="text" 
            placeholder=' Type here'/></div>

            <div><h1>City*</h1>
            <input
            className='   bg-transparent border-b border-black outline-none focus:outline-none' 
            type="text" 
            placeholder=' Enter your name'/> </div>
       </div>


        

           <div><h1 className=' pt-3'>Number*</h1>
            <input
            className='  w-full bg-transparent border-b border-black outline-none focus:outline-none' 
            type="text" 
            placeholder=' +00|00000-00000'/></div>


           <div className=' pt-12' >
            <input
            className='  w-full bg-transparent border-b border-black outline-none focus:outline-none' 
            type="text" 
            placeholder=' Enter your email' /></div>


            <div className=' flex justify-center pt-6'><button className=' text-sm font-semibold text-white  px-3 py-1 border-none pb-1
           rounded-md border-2  border-transparent bg-blue-600'>Send</button></div>

    </form>

</div>

            </div>
            </div>


</div>

    </div>
</div>

      
    </div>
  )
}

export default Vedio
