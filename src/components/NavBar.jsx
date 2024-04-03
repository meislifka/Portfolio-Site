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
    <div className={`fixed top-0 left-0 right-0 z-50 bg-[#85C7F2] text-white 'h-20'`}>
      <div className='flex justify-end max-w-[1240px] mx-auto px-4'>
        <ul className='hidden md:flex text-1xl font-bold text-[#000000] "'>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-72}
            onSetActive={() => handleSetActive('home')}
          >
            <li className={`p-4 pb-1 cursor-pointer hover:bg-[#4C4C4C]  hover:text-white whitespace-nowrap ${activeLink === 'home' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>HOME</li>
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
            <li className={`p-4 pb-1 cursor-pointer hover:bg-[#4C4C4C]  hover:text-white whitespace-nowrap ${activeLink === 'about' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>ABOUT ME</li>
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
            <li className={`p-4 pb-1 cursor-pointer hover:bg-[#4C4C4C]  hover:text-white ${activeLink === 'projects' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>PROJECTS</li>
          </Link>
          <Link
            to="extras"
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-72}
            onSetActive={() => handleSetActive('extras')}
          >
            <li className={`p-4 pb-1 cursor-pointer hover:bg-[#4C4C4C]  hover:text-white ${activeLink === 'extras' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>EXTRAS</li>
          </Link>
        </ul>

        {/*Mobile View*/}
        <div onClick={handleNav} className='mt-5 pb-5 block md:hidden hover:cursor-pointer  hover:text-black'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          {nav && (
            <ul className='absolute  pb-2 right-0 left-0 bg-[#85C7F2] text-[#000] font-bold text-center '>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('home')}
                onClick={handleNav}
              >
                <li className={`p-4 pb-1  hover:text-white cursor-pointer hover:bg-[#4C4C4C]   whitespace-nowrap ${activeLink === 'home' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>HOME</li>
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('about')}
                onClick={handleNav}
              >
                <li className={`p-4 pb-1  hover:text-white cursor-pointer hover:bg-[#4C4C4C]  whitespace-nowrap ${activeLink === 'about' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>ABOUT ME</li>
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('projects')}
                onClick={handleNav}
              >
                <li className={`p-4 pb-1  hover:text-white cursor-pointer hover:bg-[#4C4C4C]   ${activeLink === 'projects' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>PROJECTS</li>
              </Link>

              <Link
                to="extras"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-72}
                onSetActive={() => handleSetActive('extras')}
                onClick={handleNav}
              >
                <li className={`p-4 pb-1 hover:text-white cursor-pointer hover:bg-[#4C4C4C] ${activeLink === 'extras' ? 'border-b-4 border-[#4C4C4C] bg-[#6baedb]' : ''}`}>EXTRAS</li>
              </Link>
            </ul>
          )}
        </div>


      </div>
    </div>
  );
};

export default Navbar;