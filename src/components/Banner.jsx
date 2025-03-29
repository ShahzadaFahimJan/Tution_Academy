import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='w-full h-[317px] bg-[#ADD8E6] shadow-lg  shadow-gray-500/100'>
     
      <div className='flex justify-between'>
      <div className='flex flex-col justify-between'>
        <h1 className='mt-[60px] text-2xl font-bold text-white px-6'>contact Us </h1>

        <Link to="/Home" className='mb-[170px] text-2xl font-bold px-6'>Home/ <span className='text-white'>Contact Us</span></Link>
        </div>
        <div className='mt-6'>
            <img src="/public/image/bannerImage.png" alt="banner image" />
        </div>
      </div>
    </div>
  )
}
