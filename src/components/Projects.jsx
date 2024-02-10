import React from 'react'

import placceholder from '../assets/placeholderPerson.jpg'
import seeLion from '../assets/seeLion.jpg'
import hLStocks from '../assets/higherlowerstocks.jpg'
import astroids from '../assets/astroids.jpg'


export const Projects = () => {
  return (
    <div id="projects" className='min-h-screen  py-[2rem] px-4 bg-[#af4242]'>
      <div className=' mb-20'>
        <h1 className='text-3xl text-center font-bold text-[#9ae3f5]'>Projects</h1>
      </div>
      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 w-full'>
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-white' src={seeLion} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>SeeLion</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-transparent' src={hLStocks} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Stocks Higher or Lower Game</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-white' src={astroids} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Astriods</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-30 mx-auto mt-[-3rem] bg-white' src={placceholder} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Astriods</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
