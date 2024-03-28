import React from 'react';
export const AboutMe = () => {
  return (


    <div id="about" className='mt-1'>
      <h1 className='mt-1 text-center text-6xl font-bold text-[#85C7F2] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)]'>About Me</h1>
      <div className='flex min-h-screen items-center justify-center pt-0 py-[20rem] px-4 font-bold'> {/* Add margin-top here to create space for the fixed navbar */}


        {/* aobut me card*/}
        <div className=' mx-20 shadow-xl flex flex-col p-4 my-4 rounded-lg bg-[#d1d1d1]  border-gray-500 border-4'>
          <div className='ml-5 px-2 rounded-md'>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'> I currently work at L3Harris as a software engineer. I hold a BS degree from Villanova University in Computer Engineering with Minors in Cyber Security and Computer Science.</p>
            <br></br>

            <span className='mt-4 text-center text-xl font-bold text-[#6fadd6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)'> Journey into Programming:</span>

            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>
              I first dabbled with programing on my brother's old Macbook, running macOS Snow Leopard, and a "Learn To Program" book.
              I remember making my first "Hello World" program in Ruby and being fascinated after seeing the terminal print out "Hello World".
              In high school I took my first official programming classes.
              I also disassembled an old laptop out of my own curiosity, fashioning it into an external monitor and repurposing the USB port from the laptop to fix a cord to a speaker.
              Dispite my interest in computers, I entered Villanova declared as a Mechanical Engineer, upon the end of my freshman year I realized my real passion was with computers so I switched majors. </p>
            <br></br>
            <span className='mt-4 text-center text-xl font-bold text-[#6fadd6] '>Learning and Growth:</span>
            <br></br>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>I firmly believe in the power of continuous learning. It's the key to avoiding stagnation and propelling progress.
              I also stand by the notition that you should follow your passions. If you're not doing something that you're passionate about then the work seems meaningless. I learned this when I decided to swtich majors. </p>
            <br></br>

            <span className='mt-4 text-center text-xl font-bold text-[#6fadd6] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)'>Values and Vision:</span>
            <br></br>
            <p className='mt-4 text-left text-l font-weight-200 text-[#000000]'>One of my core values is the importance of continuous learning. I thrive on acquiring new skills and knowledge, always seeking ways to enhance my abilities. Looking ahead, my goal is to continue pushing boundaries and contributing to the community.
              <br></br><br></br>
              Thanks for visiting my website and learning a bit about me!</p>
          </div>


        </div>




      </div>
    </div >
  );
};