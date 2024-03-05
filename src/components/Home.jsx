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
    <div id="home" className='flex flex-col-2 justify-center items-center w-full py-[2rem] px-4 mt-20 min-h-screen'>

      <div className="flex items-center pl-5">
        <img className='w-40 mx-auto mt-[-3rem] bg-transparent rounded' src={person} alt="/" />
      </div>

      <div>
        <div>
          <h1 className='text-blue-500 text-5xl font-bold'>Mei Slifka</h1>
          <h1 className='text-red text-2xl font-bold text-center'>Software Engineer</h1>
        </div>

        <div className="flex space-x-1 mt-2">
          <a href="https://github.com/meislifka" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare size={40} />
          </a>

          <a href="https://www.linkedin.com/in/mei-slifka/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>

          <button onClick={handleResumeButtonClick} className="flex bg-blue-500 text-white p-2 rounded-md">
            Resume <ImNewTab />
          </button>
        </div>
      </div>


    </div>


  );
};