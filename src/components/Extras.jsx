import React, { useState } from 'react'
import parkMap from '../assets/NationalParks.png'
import escapeRoom from '../assets/escapeRoom.jpg'
import gradBear from '../assets/gradBear.jpg'
import mushroomMan from '../assets/mushroomMan.jpg'
import hollowKnight from '../assets/hollowKnight.jpg'
import elephant from '../assets/elephant.jpg'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export const Extras = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [gradBear, mushroomMan, hollowKnight, elephant]; // Add your image URLs here

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };



  return (
    <div id="extras" className='min-h-screen pb-10 py-[rem] px-4 '>
      <h1 className='text-6xl text-center font-bold text-[#85C7F2] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)]  mb-10'>EXTRAS</h1>


      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 w-full'>

          {/* National Parks card*/}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#3a8725] hover:scale-105 duration-300 border-black border-4'>
            <h2 className='text-2xl font-bold text-center '>National Parks</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg  border-black border-4 h-69 object-cover my-2' src={parkMap} alt="/" />
            <p className='text-2xl font-bold text-center '>One of my bucket list items is to visit all 63 National Parks Currently: 7/63 </p>
          </div>

          {/* Escape room card*/}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d32d2d] hover:scale-105 duration-300 border-black border-4'>
            <h2 className='text-2xl font-bold text-center '>DIY Escape Room</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg  border-black border-4 h-69 object-cover my-2' src={escapeRoom} alt="/" />
            <p className='text-2xl font-bold text-center '>Part of the escape room I built in 2020 <br></br> (featuring Astroids game on the left)</p>

          </div>

          {/* Crochet card*/}
          <div className='w-full shadow-xl flex flex-col p-4 px-1 my-4 rounded-lg bg-[#dec83d] hover:scale-105 duration-300 border-black border-4'>
            <h2 className='text-2xl font-bold text-center'>Crochet</h2>
            <div className="relative">
              <img className='w-30 mx-auto mt-1 bg-white rounded-lg border-black border-4 h-69 object-cover my-2' src={images[currentImageIndex]} alt="/" />
              <button className="hover:bg-[#929292] absolute top-1/2 transform -translate-y-1/2 left-0 rounded-full border-black border-2 bg-gray-200 text-black font-bold text-l py-1 px-2" onClick={goToPreviousImage}>{<GrLinkPrevious />}</button>
              <button className="hover:bg-[#929292] absolute top-1/2 transform -translate-y-1/2 right-0 rounded-full border-black border-2 bg-gray-200 text-black font-bold text-l py-1 px-2" onClick={goToNextImage}>{<GrLinkNext />}</button>
            </div>
            <p className='text-2xl font-bold text-center'>I've recently gotten into crochet,<br></br> Click the next button to see some of my projects</p>
          </div>

        </div>
      </div>
    </div>

  )
}
