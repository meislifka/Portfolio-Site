import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="flex justify-end items-centertext bg-[#9ae3f5] pt-1">
      <div className="flex space-x-1 mr-2">
        {/* GitHub icon linked to GitHub */}
        <a href="https://github.com/meislifka" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={30} />
        </a>

        {/* LinkedIn icon linked to LinkedIn */}
        <a href="https://www.linkedin.com/in/mei-slifka/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
      <div>
        {/* Contents for the second div */}
        <div>© 2024 Mei Slifka.</div>
        <div className='mb-1'>Built with React and Tailwind CSS.</div>
      </div>
    </div>
  );
};