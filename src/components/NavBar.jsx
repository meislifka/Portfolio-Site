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
    <div className={`fixed top-0 left-0 right-0 z-50 bg-[#9ae3f5] text-white 'h-20'`}>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4'>
        <h1 className='text-3xl font-bold text-[#00df9a]'></h1>
        <ul className='hidden md:flex text-1xl font-bold text-[#000000]'>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-72}
            onSetActive={() => handleSetActive('home')}
          >
            <li className={`p-4 pb-1 cursor-pointer whitespace-nowrap ${activeLink === 'home' ? 'border-b-2 border-blue-500' : ''}`}>HOME</li>
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-72}
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
            offset={-72}
            onSetActive={() => handleSetActive('projects')}
          >
            <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'projects' ? 'border-b-2 border-blue-500' : ''}`}>PROJECTS</li>
          </Link>
          <Link
            to="extra"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-72}
            onSetActive={() => handleSetActive('extra')}
          >
            <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'extra' ? 'border-b-2 border-blue-500' : ''}`}>EXTRA</li>
          </Link>
        </ul>

        <div onClick={handleNav} className=' mt-5 pb-5 block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          {nav && (
            <ul className='absolute  pb-2 right-0 left-0 bg-[#9ae3f5] text-[#000] font-bold text-center'>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('home')}
              >
                <li className={`p-4 pb-1 cursor-pointer whitespace-nowrap ${activeLink === 'home' ? 'border-b-2 border-blue-500' : ''}`}>HOME</li>
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
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
                offset={-72}
                onSetActive={() => handleSetActive('projects')}
              >
                <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'projects' ? 'border-b-2 border-blue-500' : ''}`}>PROJECTS</li>
              </Link>

              <Link
                to="extra"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('extra')}
              >
                <li className={`p-4 pb-1 cursor-pointer ${activeLink === 'extra' ? 'border-b-2 border-blue-500' : ''}`}>EXTRA</li>
              </Link>
            </ul>
          )}
        </div>


      </div>
    </div>
  );
};

export default Navbar;