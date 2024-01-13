import React, { useState } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };



  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  React.useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      // Scroll event begins
    });

    Events.scrollEvent.register('end', (to, element) => {
      // Scroll event ends
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-[#9ae3f5] text-white ${nav ? 'h-screen' : 'h-20'}`}>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        <h1 className='text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex'>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            onSetActive={() => handleSetActive('about')}
          >
            <li className={`p-4 pb-1 cursor-pointer whitespace-nowrap ${activeLink === 'about' ? 'border-b-2 border-blue-500' : ''}`}>ABOUT ME</li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            onSetActive={() => handleSetActive('projects')}
          >
            <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'projects' ? 'border-b-2 border-blue-500' : ''}`}>PROJECTS</li>
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-70}
            onSetActive={() => handleSetActive('resume')}
          >
            <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'resume' ? 'border-b-2 border-blue-500' : ''}`}>RESUME</li>
          </Link>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;