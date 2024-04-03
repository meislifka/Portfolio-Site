import React from 'react';

export const AboutMe = () => {
  return (
    <div id="about" className='mt-1 pt-1 min-h-screen'>
      <div className='mt-1 text-center text-6xl font-bold text-[#85C7F2] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] mb-10'>
        <h1>About Me</h1>
      </div>
      <div className=' items-center'>
        {/* about me card*/}
        <div className='px-4 font-bold sm:text-m md:text-xl md:mx-20 shadow-xl p-4 my-4 rounded-lg bg-[#d1d1d1] border-gray-500 border-4'>
          <div className='ml-5 px-2 rounded-md'>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'> I currently work at L3Harris as a software engineer. I hold a BS degree from Villanova University in Computer Engineering with Minors in Cyber Security and Computer Science.</p>
            <br></br>

            <span className='mt-4 text-center text-xl font-bold text-[#4598cf] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)'> Journey into Programming:</span>

            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>
              I first dabbled with programming on my brother's old MacBook, running macOS Snow Leopard, and a "Learn To Program" book.
              I remember making my first "Hello World" program in Ruby and being fascinated after seeing the terminal print out "Hello World".
              In high school, I took my first official programming classes.
              I also disassembled an old laptop out of my own curiosity, fashioning it into an external monitor and repurposing the USB port from the laptop to fix a cord to a speaker.
              Despite my interest in computers, I entered Villanova declared as a Mechanical Engineer; upon the end of my freshman year, I realized my real passion was with computers so I switched majors. </p>
            <br></br>
            <span className='mt-4 text-center text-xl font-bold text-[#4598cf] '>Learning and Growth:</span>
            <br></br>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>I firmly believe in the power of continuous learning. It's the key to avoiding stagnation and propelling progress.
              I also stand by the notion that you should follow your passions. If you're not doing something that you're passionate about then the work seems meaningless. I learned this when I decided to switch majors. </p>
            <br></br>

            <span className='mt-4 text-center text-xl font-bold text-[#4598cf] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)'>Values and Vision:</span>
            <br></br>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>One of my core values is the importance of continuous learning. I thrive on acquiring new skills and knowledge, always seeking ways to enhance my abilities. Looking ahead, my goal is to continue pushing boundaries and contributing to the community.
              <br></br><br></br>
              Thanks for visiting my website and learning a bit about me!</p>
          </div>
        </div>
      </div></div>
  );
};
