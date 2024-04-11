import { HiArrowSmallRight } from 'react-icons/hi2';
import React from 'react';

export default function About() {
  return (
    <div className='m-16 relative'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-9xl font-semibold relative z-10'>ABOUT</h1>
          <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-6 absolute right-[-64] top-1/2 transform -translate-y-1/4 -rotate-45 z-0 ml-96'>
            <HiArrowSmallRight className='text-6xl' />
          </div>
        </div>
        <div className='flex text-justify flex-col justify-between items-start text-2xl mr-16'>
          <p>"GARED MATTHEW IS A TALENTED FREELANCE </p>
          <p>DESIGNER AND DEVELOPER KNOWN FOR HIS</p>
          <p>CREATIVE PROWESS AND TECHNICAL EXPERTISE</p>
        </div>
      </div>
    </div>
  );
}
