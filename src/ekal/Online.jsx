import React from 'react'
import img2 from '../image/img2.png'

const Online = () => {
  return (
    <div className='md:grid md:justify-items-center   pt-5 '>
      <div className='md:flex md:flex-row flex flex-col md:p-10 p-4 '>

        <div className=' md:w-96 w-96 md:pt-14 grid justify-center'>
            <div><h1 className=' text-base font-bold'>Better Learning Better Results</h1></div>
            <div><h1 className=' font-black text-3xl'>Online edducation platform that fits for everyone</h1></div>
            <div><p className=' text-sm font-medium'>Refactoring UI is a design-for-developers book + video series put
                 together by Adam Wathan and Steve Schoger.It covers literally everything we know about making things look awesome.
                 Almost 10,000 people have picked it up to say about how 
                it helped them improve their work.</p></div>
            <div className=' pt-4'><button className=' text-sm font-semibold text-black px-3 py-1 border-none pb-1
           rounded-md border-2  border-transparent  bg-yellow-500'>Explore more about us</button></div>

        </div>

        <div className=' grid justify-center'>
            <img className='md:h-96 md:w-96  h-36 w-36' src={img2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Online
