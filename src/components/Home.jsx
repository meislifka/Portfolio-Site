import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import person from '../assets/portrait.jpg'
import resume from '../assets/MSlifka_Resume.pdf'
import { ImNewTab } from "react-icons/im";

export const Home = () => {

  const handleResumeButtonClick = () => {
    window.open(resume, '_blank');
  };

  return (
    <div id="home" className='flex flex-col-2 justify-center items-center w-full py-[2rem] px-4 min-h-screen '>

      {/* Mei card*/}
      <div className='shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1] border-gray-500 border-4'>
        <h1 className='text-5xl text-center font-bold text-[#85C7F2] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] '>Mei Slifka</h1>

        <img className='mx-auto mt-1 bg-white rounded-lg border-black border-4 h-69 w-30 object-cover my-2' src={person} alt="/" />

        <h1 className='text-red text-2xl font-bold text-center'>Software Engineer</h1>

        <div className=" flex space-x-1 mt-2 items-center justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <a href="https://github.com/meislifka" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={40} />
          </a>

          <a href="https://www.linkedin.com/in/mei-slifka/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>

          <button onClick={handleResumeButtonClick} className="flex bg-[#85C7F2] text-black p-2 rounded-md">
            Resume <ImNewTab />
          </button>
        </div>

      </div>


    </div>
  );
};
