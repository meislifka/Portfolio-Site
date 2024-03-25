import React from 'react'
import parkMap from '../assets/NationalParks.png'
import escapeRoom from '../assets/escapeRoom.jpg'
//import crochet from '../assets/'
export const Extras = () => {
  return (
    <div id="extras" className='min-h-screen  py-[rem] px-4 '>
      <h1 className='text-6xl text-center font-bold text-[#9ae3f5] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)]  mb-10'>EXTRAS</h1>


      <div className='flex max-w-[1240px] mx-auto'>



        <div className='grid md:grid-cols-2 gap-8 w-full'>

          {/* National Parks card*/}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <h2 className='text-2xl font-bold text-center '>National Parks</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg  border-gray-500 border-4 h-69 object-cover my-2' src={parkMap} alt="/" />


            <p className='text-2xl font-bold text-center '>One of my goals is to visit all 63 National Parks Currently: 7/63 </p>

          </div>

          {/* Escape room card*/}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <h2 className='text-2xl font-bold text-center '>DIY Escape Room</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg  border-gray-500 border-4 h-69 object-cover my-2' src={escapeRoom} alt="/" />
            <p className='text-2xl font-bold text-center '>Part of the escape room I built <br></br> (featuring Astroids game on the left)</p>

          </div>

        </div>
      </div>
    </div>

  )
}
