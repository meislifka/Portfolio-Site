import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import person from '../assets/placeholderPerson.jpg'
export const Home = () => {

  const handleResumeButtonClick = () => {
    // Replace 'path/to/your-resume.pdf' with the actual path or URL of your resume PDF
    const resumeUrl = '/path/to/your-resume.pdf';
    window.open(resumeUrl, '_blank');
  };


  return (
    <div id="home" className='flex flex-col-2  w-full py-[2rem] px-4 items-center mt-20 min-h-screen'>
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

          <button onClick={handleResumeButtonClick} className="bg-blue-500 text-white p-2 rounded-md">
            View Resume
          </button>


        </div>
      </div>

      <div className="flex items-center">
        <img className='w-40 mx-auto mt-[-3rem] bg-transparent ' src={person} alt="/" />
      </div>


    </div>
  );
};