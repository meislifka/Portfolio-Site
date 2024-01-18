import React from 'react'

import placceholder from '../assets/placeholderPerson.jpg'
export const Projects = () => {
  return (
    <div id="projects" className='min-h-screen  py-[2rem] px-4 bg-white'>
      <div className=' mb-20'>
        <h1 className='text-3xl font-bold text-[#9ae3f5]'>Projects</h1>
      </div>
      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-3 gap-8 w-full'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={placceholder} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Stocks Higher or Lower Game</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={placceholder} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Project 2</h2>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={placceholder} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Project 3</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
