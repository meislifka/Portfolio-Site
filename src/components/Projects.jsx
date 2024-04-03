import React, { useState } from 'react'

import seeLion from '../assets/seeLion.jpg'
import seeLionAbout from '../assets/seeLionAbout.jpg'
import seeLionLogin from '../assets/seeLionLogin.jpg'
import seeLionRegister from '../assets/seeLionRegister.jpg'
import seeLionSearch from '../assets/seeLionSearch.jpg'
import seeLionQueryDb from '../assets/seeLionQueryDB.jpg'
import hLStocks from '../assets/higherlowerstocks.jpg'
import astroids from '../assets/astroids.jpg'
import website from '../assets/website.jpg'
import { VscGithub } from "react-icons/vsc";
import { ImNewTab } from "react-icons/im";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";


export const Projects = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [seeLion, seeLionAbout, seeLionLogin, seeLionRegister, seeLionSearch, seeLionQueryDb]; // Add your image URLs here

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="projects" className=' px-4 '>
      <div className=' mb-10'>
        <h1 className='text-6xl text-center font-bold text-[#85C7F2] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] '>Projects</h1>
      </div>
      <div className='flex max-w-[1240px] mx-auto'>
        <div className='grid md:grid-cols-2 gap-8 w-full'>

          {/* SeeLion card*/}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1] hover:scale-105 duration-300 border-gray-500 border-4'>
            <h2 className='text-2xl font-bold text-center pb-1'>SeeLion</h2>
            <div className="relative">
              <img className='w-30 mx-auto mt-1 bg-white rounded-lg border-black border-4 h-69 object-cover my-2' src={images[currentImageIndex]} alt="/" />
              <button className="hover:bg-[#929292] absolute top-1/2 transform -translate-y-1/2 left-1 rounded-full border-black border-2 bg-gray-200 text-black font-bold text-l py-1 px-2" onClick={goToPreviousImage}>{<GrLinkPrevious />}</button>
              <button className="hover:bg-[#929292] absolute top-1/2 transform -translate-y-1/2 right-1 rounded-full border-black border-2 bg-gray-200 text-black font-bold text-l py-1 px-2" onClick={goToNextImage}>{<GrLinkNext />}</button>
            </div>
            <p className='text-1xl font-bold text-center pt-1 flex justify-center items-center'>
              <span className="bg-[#4dcdc7] text-[#152a4f] rounded-md px-2">Python Flask</span>
              <span className="bg-[#45a2db] text-[#152a4f] rounded-md px-2 mx-1">SqLite</span>
              <span className="bg-blue-400 text-[#212471] rounded-md px-2 mr-1">CSS</span>
            </p>
            <p className='text-2xl font-bold text-center pt-1 flex justify-center items-center'>
              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292] mr-1">
                <a href="https://github.com/meislifka/Sea-Lion-Capstone-Project" target="_blank" rel="noopener noreferrer" >
                  <VscGithub />
                </a>
              </div>
            </p>
            <p className='text-2xl font-bold text-center py-8'>Web application that allows verified users to log galapagos sea lion sightings </p>
          </div>

          {/* Stocks card*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1] hover:scale-105 duration-300 border-gray-500 border-4'>

            <h2 className='text-2xl font-bold text-center pb-1 '>Stocks Higher or Lower Game</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg border-gray-500 border-4 my-2' src={hLStocks} alt="/" />

            <p className='text-1xl font-bold text-center pt-1 flex justify-center items-center'>
              <span className="bg-red-400 text-[#742020] rounded-md px-2">HTML</span>
              <span className="bg-yellow-400 text-[#756a20] rounded-md px-2 mx-1">Javascript</span>
              <span className="bg-blue-400 text-[#212471] rounded-md px-2 mr-1">CSS</span>
            </p>

            <p className='text-2xl font-bold text-center pt-1 flex justify-center items-center'>
              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292] mr-1">
                <a href="https://github.com/meislifka/SP500-HL-Game" target="_blank" rel="noopener noreferrer" >
                  <VscGithub />
                </a>
              </div>
              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292]">
                <a href="https://higherlowerstocks.com/" target="_blank" rel="noopener noreferrer">
                  <ImNewTab />
                </a>
              </div>

            </p>

            <p className='text-2xl font-bold text-center py-8'>Guessing game to guess the relative price of a stock to another from the S&P500 </p>
          </div>

          {/* Astroid card*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1] hover:scale-105 duration-300 border-gray-500 border-4'>
            <h2 className='text-2xl font-bold text-center pb-1'>Astriods</h2>
            <img className='w-30 mx-auto mt-1 bg-white rounded-lg border-gray-500 border-4 my-2' src={astroids} alt="/" />

            <p className='text-1xl font-bold text-center pt-1 flex justify-center items-center'>
              <span className="bg-blue-600 text-yellow-400 rounded-md px-2 mr-1">PyGame</span>

            </p>
            <p className='text-2xl font-bold text-center pt-1 flex justify-center items-center'>
              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292]">
                <a href="https://github.com/meislifka/Astriods" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </a>
              </div>
            </p>
            <p className='text-2xl font-bold text-center py-8'> A python game similar to the old arcade game, Astriods. Used as a puzzle in an escape room I built </p>
          </div>

          {/* Portfolio card*/}
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1] hover:scale-105 duration-300 border-gray-500 border-4'>
            <h2 className='text-2xl font-bold text-center pb-1'>Portfolio Website</h2>
            <img className='w-30 mx-auto mt-1 rounded-lg border-gray-500 border-4 my-2' src={website} alt="/" />
            <p className='text-1xl font-bold text-center pt-1 '>
              <span className="bg-[#000000] text-[#53d6e7] rounded-md px-2 ">React</span>
              <span className="bg-[#ababab] text-blue-600 rounded-md px-2 mx-1">Tailwind</span>
            </p>
            <p className='text-2xl font-bold text-center pt-1 flex justify-center items-center'>
              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292] mr-1">
                <a href="https://github.com/meislifka/Portfolio-Site" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </a>
              </div>

              <div className=" rounded-lg hover:cursor-pointer hover:bg-[#929292]">

                <a href="https://meislifka.dev" target="_blank" rel="noopener noreferrer">
                  <ImNewTab />
                </a>
              </div>

            </p>

            <p className='text-2xl font-bold text-center py-8'> This website! </p>

          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div >
  );
};
