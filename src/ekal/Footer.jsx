import React from 'react'
import ekal from '../image/EkalLogo.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' grid justify-items-center  bg-blue-950 text-white p-4 w-auto' >


      <div className=' md:flex md:flex-row flex flex-col md:space-x-20 space-y-7 md:pt-20 p-5'>
          <div className=' flex flex-col md:w-72 '>
            <div><img className=' md:h-24 md:w-36 h-20 w-24 '
             src={ekal} alt="ekalLogo" /></div>
            <div><p className=' pt-3 text-sm'>eKal Academy is a digital learning initiative
                 of Kalorex Group (29 years of legacy in education), 
                 eKal Academy – a Digital teaching platform enabling LIVE & interactive 
                 classes, offering Individual and Group programs.</p></div>

            <div className=' flex flex-row space-x-3 pt-4'>
                <h1 className=' text-blue-800 text-3xl'><FaFacebookSquare /></h1>
                <h1 className=' text-sky-400 text-3xl'><FaSquareTwitter /></h1>
                <h1 className=' text-red-500 text-3xl'><FaInstagramSquare /></h1>
                <h1 className=' text-red-500 text-3xl'><FaYoutubeSquare /></h1></div> 
          </div>


          <div>
               <div>
               <h1 className=' font-bold'>Company</h1>
                <ul className=' text-sm pt-4 space-y-2'>
                
                <li>About us</li>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Our Founder</li>
                <li>Our Partners Universities</li>
                <li>Our Partners Schools</li>
                <li>Our Career Mentors</li>
                <li>Our Team</li>
                </ul>
               </div>

               <div>
                <h1 className=' font-bold pt-10'>Contact Us</h1>
                <ul className=' text-sm pt-4 space-y-2'>
                <li>info@ekalacademy.com</li>
                <li>+91 9711761050</li>
                </ul>
               </div>
          </div>


          <div>
                <h1 className=' font-bold'>Platform</h1>
          <ul className=' text-sm pt-4 space-y-2'>
                
                <li>Support</li>
                <li>Privacy Policy</li>
                <li>Refund and Returns Policy</li>
                <li>Term conditions</li>
                <li>Contact</li>
                <li>Career Mentorship</li>
                <li>Event</li>
                <li>News</li>
                <li>Refferal Program</li>
                </ul>
          </div>


          <div>
            <form action="">
                <div className=' flex flex-col space-y-4 '>
                    <h1 className=' font-bold'>Newssletter</h1>
                    <input 
                    className=' rounded p-1'
                    type="text"
                    placeholder='Your Name' />

                    <input
                    className=' rounded p-1'
                    type="text"
                    placeholder='Your Email' />

                    <input
                     className='rounded p-1'
                     type="text" 
                    placeholder=' Enter Captcha' />

                    <ul>
                   <li><button className=' border-none bg-white text-black w-20'>wQsQ</button></li> 

                   <li> <button className=' border-none  text-white bg-blue-600 tex  w-full mt-5 font-semibold p-1 rounded'>Sign Up</button></li></ul>
                </div>
            </form>
          </div>


      </div>

      <div className=' flex flex-row mt-32'><h1 className=' text-xs text-gray-400'>Copyright @2024. All Rights Reserved Powered By:</h1>
      <h1 className=' text-xs pl-1'> ADIT MICROSYS</h1></div>


    </div>
  )
}

export default Footer
