"use client";

import { Carousel } from "flowbite-react";
import React from 'react'

const Homepage = () => {
  return (

    <main>
      {/* home */}

      <div id='home' className='w-screen  flex flex-wrap justify-between mx-auto px-6 py-7 lg:px-20 bg-red-600 fixed z-50'>
        {/* navbar */}
        <nav className='flex flex-wrap '>
          <div>
            <p className='text-white text-5xl font-bold'>  DevFolio</p>


          </div>

          <div className='mt-3'>
            <ul className='flex flex-row ml-72  '>
              <li className='mr-4 hover:text-white cursor-pointer'>Home</li>
              <li className='mr-4 hover:text-white cursor-pointer'>About</li>

              <li className='mr-4 hover:text-white cursor-pointer'>Service</li>
              <li className='mr-4 hover:text-white cursor-pointer'>Experience</li>

              <li className='mr-4 hover:text-white cursor-pointer'>Portfolio</li>
              <li className='mr-4 hover:text-white cursor-pointer'>Price</li>

              <li className='mr-4  hover:text-white cursor-pointer'>Review</li>
              <li className='mr-4 hover:text-white cursor-pointer'>Team</li>

              <li className='mr-4 hover:text-white cursor-pointer'>Blog</li>
              <li className='mr-4 hover:text-white cursor-pointer'>Contact</li>


            </ul>

          </div>
        </nav>

        {/* i m  */}
      </div>
      <br></br>
      <div className="h-72 sm:h-64 xl:h-96 2xl:h-96 bg-cover relative">
        <Carousel>
          <img src="/images/1.jpg" alt="Hero Image" />

          <img src="/images/2.jpg" alt="..." />
          <img src="/images/3.jpg" alt="..." />
          <img src="/images/4.jpg" alt="..." />

        </Carousel>
        {/* <div className="flex absolute text-4xl text-yellow-400 top-2 align-middle">hello this is</div>    */}
      </div>





      {/* 10YEARS */}
      <div className="flex flex-wrap  ">
        <div className="rounded-3xl w-[2000px]">
          <img src="/images/about.jpg" />

        </div>

        <div >
          {/* <div className="text-red-600 w-6 border-red-600 p-4 m-4 border-spacing-2 h-2"></div> */}
          <div className="mt-8 text-gray-600 text-3xl m-4">Learn About Me</div>
          <div className="mt-8 text-black font-bold text-5xl m-4">10 Years Experience</div>
          <p className=" flex flex-col text-center justify-between">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        </div>
      </div>





















    </main>
  )
}

export default Homepage