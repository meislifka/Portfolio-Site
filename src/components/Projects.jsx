import React from 'react'

import seeLion from '../assets/seeLion.jpg'
import hLStocks from '../assets/higherlowerstocks.jpg'
import astroids from '../assets/astroids.jpg'
import website from '../assets/website.jpg'


export const Projects = () => {
  return (
    <div id="projects" className='min-h-screen py-[2rem] px-4 '>
      <div className=' mb-20'>
        <h1 className='text-6xl text-center font-bold text-[#9ae3f5] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] '>Projects</h1>
      </div>
      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 w-full'>
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg' src={seeLion} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8 pb-0'>SeeLion</h2>
            <p className='text-1xl font-bold text-center pt-1'>
              <span className="bg-[#4dcdc7]  text-[#152a4f] rounded-md px-2">Python Flask</span>
              <span className="bg-[#4dcdc7]  text-[#152a4f] rounded-md px-2 mx-1">SqLite</span>
              <span className="bg-blue-400 text-[#212471] rounded-md px-2">CSS</span>
            </p>
            <p className='text-2xl font-bold text-center py-8'>Web application that allows verified users to log galapagos sea lion sightings </p>

          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg' src={hLStocks} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8 pb-0'>Stocks Higher or Lower Game</h2>
            <p className='text-1xl font-bold text-center pt-1 '>
              <span className="bg-red-400 text-[#742020] rounded-md px-2">HTML</span>
              <span className="bg-yellow-400 text-[#756a20] rounded-md px-2 mx-1">Javascript</span>
              <span className="bg-blue-400 text-[#212471] rounded-md px-2">CSS</span>
            </p>
            <p className='text-2xl font-bold text-center py-8'>Guessing game to guess the relative price of a stock to another from the S&P500 </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg' src={astroids} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8 pb-0'>Astriods</h2>
            <p className='text-1xl font-bold text-center pt-1 '>
              <span className="bg-blue-600 text-yellow-400 rounded-md px-2 ">PyGame</span>
            </p>
            <p className='text-2xl font-bold text-center py-8'> A python game similar to the old arcade game, Astriods. Used as a puzzle in an escape room I built </p>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <img className='w-30 mx-auto mt-1 rounded-lg' src={website} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8 pb-0'>Portfolio Website</h2>
            <p className='text-1xl font-bold text-center pt-1 '>
              <span className="bg-[#000000] text-blue-600 rounded-md px-2 ">React</span>
              <span className="bg-[#ababab] text-blue-600 rounded-md px-2 mx-1">Tailwind</span>
            </p>
            <p className='text-2xl font-bold text-center py-8'> This website </p>
          </div>
        </div>
      </div>
    </div >
  );
};
