import React from 'react'
import { FaTrophy } from "react-icons/fa";


export const Awards = () => {
  return (
    <div id="awards" className='min-h-screen  py-[2rem] px-4 '>
      <div className=' mb-10'>
        <h1 className='text-6xl text-center font-bold text-[#9ae3f5] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] '>Awards</h1>
      </div>

      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 w-full'>

          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <span className='black ml-2 flex items-center'>Academic</span>
            <div className='pl-20 text-xl'>

              <div className="flex items-center">

                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)] " />
                <span className='black ml-2'>Principal's honor roll (16 semesters)</span>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)]" />
                <span className='black ml-2'>Tau Beta Pi Honor Society</span>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)]" />
                <span className='black ml-2'>1st place Lockheed Martian CodeQuest (2019)</span>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)]" />
                <span className='black ml-2'> 3rd place State levelNational History Day</span>
              </div>
            </div>
          </div>

          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d9d9d9] hover:scale-105 duration-300 border-gray-500 border-4'>
            <span className='black ml-2 flex items-center'>Extracurriculars</span>
            <div className='pl-20 text-xl'>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)] " />
                <span className='black ml-2'>3rd Degree black belt (10+ years Marital arts)</span>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)]" />
                <span className='black ml-2'>Principal's honor roll</span>
              </div>
              <div className="flex items-center">
                <FaTrophy className="text-[#eecc42] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1.8)]" />
                <span className='black ml-2'>Principal's honor roll</span>
              </div>
            </div>
          </div>


        </div>
      </div>




    </div>
  );
};
