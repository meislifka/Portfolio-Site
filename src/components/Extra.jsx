import React from 'react'
import parkMap from '../assets/NationalParks.png'
export const Extra = () => {
  return (
    <div id="extra" className='g-red-500 h-300 min-h-screen'>
      <h1 className='text-3xl font-bold text-[#9ae3f5]'>EXTRA</h1>
      <div>
        <p>Here are some other things about me</p>
        <div>
          <p>One of my goals is to visit all 63 National Parks</p>
          <img className='w-50 bg-transparent ' src={parkMap} alt="/" />
        </div>

        <div>
          <p>I like to do grandma hobbies</p>
          <p>Crochet</p>
          <p>Embroidery</p>
          <p>Cross Stitch</p>
        </div>
      </div>

    </div>
  )
}
