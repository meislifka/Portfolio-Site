import React from 'react'
import parkMap from '../assets/NationalParks.png'
//import crochet from '../assets/'
export const Extra = () => {
  return (
    <div id="extra" className='min-h-screen  py-[2rem] px-4 '>
      <h1 className='text-6xl text-center font-bold text-[#9ae3f5] drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,1.8)] '>EXTRA</h1>
      <div>
        <p>Here are some other things about me</p>
        <div>
          <p>One of my goals is to visit all 63 National Parks</p>
          <div>
            <img className='w-50 bg-transparent border-gray-500 border-4 rounded-md' src={parkMap} alt="/" />
          </div>
        </div>

        <div>
          <p>I like to do grandma hobbies</p>-
          <p>Crochet</p>
          <p>Embroidery</p>
          <p>Cross Stitch</p>

          <p>Escape rooms</p>
        </div>
      </div>

    </div>
  )
}
