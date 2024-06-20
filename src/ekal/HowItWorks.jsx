import React from 'react'
import img1 from '../image/1img.png';
import img2 from '../image/2img.png';

const HowItWorks = () => {
  return (
    <>
          <div className=' hidden sm:block ' >
      <div className=' text-center  my-2 py-2'>
      < h1 className=' sm:text-3xl text-6xl   font-semibold  mynpm install react-icons-3   ' >How It works </h1>
      <p className='  text-gray-400  sm:text-none sm:text-xl text-2xl   '>
      Here's how we enabled 55k+ Students  and top schools across the  country to get #CarreerReady.
      </p>
      </div>
      <div className=' grid justify-items-center'>
      <div className=' sm:grid sm:grid-cols-3  pl-3    sm:w-[66rem] sm:h-[32rem] '>
       <div className=' flex flex-row w-[21rem] '>
         <h1 className=' text-9xl  text-gray-300 pt-20  font-semibold'>1.</h1>
         <div className=' flex flex-col  w-72  '>
        <img className=' w-40 h-40' src={img1} alt="img1" />  
        <p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
        </div>
        </div>

        <div className=' flex flex-row w-[27rem]  relative right-16 '>
        <div className=' flex flex-col'>
        <img className='   h-24  w-40  pr-12 mt-12 relative  right-4  mr-8' src={img2} alt="img2" />
         <h1 className='  text-9xl  pl-20  pb-12 text-gray-300  font-semibold  relative  bottom-16'>2.</h1>
         </div>
         <div className=' flex flex-col w-72  '>
        <img className=' w-40 h-40' src={img1} alt="img1" />  
        <p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
        </div>
        </div>


<div className=' flex flex-row w-[27rem] relative right-16   '>
<div className=' flex flex-col'>
<img className='  h-24  w-40  pr-12 mt-12 relative  right-4 ' src={img2} alt="img2" />
 <h1 className='  text-9xl  pl-20  pb-12 text-gray-300  font-semibold  relative  bottom-16'>3.</h1>
 </div>
 <div className=' flex flex-col w-72  '>
<img className=' w-40 h-40' src={img1} alt="img1" />  
<p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
</div>
</div>
   
<div className=' flex flex-row relative  bottom-24  '>
  <h1 className=' text-9xl  text-gray-300 pt-20  font-semibold'>4.</h1>
  <div className=' flex flex-col w-64  '>
  <img className=' w-40 h-40' src={img1} alt="img1" />  
   <p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
  </div>
  </div>
      
        
  <div className=' flex flex-row w-[27rem] relative right-16   bottom-24 '>
<div className=' flex flex-col'>
<img className='  h-24  w-40  pr-12 mt-12 relative  right-4 ' src={img2} alt="img2" />
 <h1 className='  text-9xl  pl-20  pb-12 text-gray-300  font-semibold  relative  bottom-16'>5.</h1>
 </div>
 <div className=' flex flex-col w-72  '>
<img className=' w-40 h-40' src={img1} alt="img1" />  
<p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
</div>
</div>
        

<div className=' flex flex-row w-[27rem] relative right-16  bottom-24 '>

<div className=' flex flex-col'>
<img className=' h-24  w-40  pr-12 mt-12 relative  right-4 ' src={img2} alt="img2" />
 <h1 className='  text-9xl  pl-20  pb-12 text-gray-300  font-semibold  relative  bottom-16'>6.</h1>
 </div> 
 <div className=' flex flex-col w-72  '>
<img className=' w-40 h-40' src={img1} alt="img1" />  
<p>Take Daignostic and Apptitude Test  to get SWOT analysis of students  </p>    
</div>
</div>
       </div>
       </div>
       </div>

    </>
  )
}

export default HowItWorks
