import React from 'react';
import { HiArrowSmallRight } from 'react-icons/hi2';

export default function Features() {
  return (
    <div className='mt-16 mx-16 mb-48'>
      <div className='flex flex-col items-center justify-center mb-12'>
        <h1 className='text-8xl'>FEATURED PROJECTS</h1>
      </div>

      <div className='relative'>
        <button className='text-4xl pt-8 pb-6 px-12 bg-black text-white rounded-full absolute left-0'>
          MOBILE APP
        </button>
        <button className='text-4xl pt-8 pb-6 px-12 bg-white border text-black rounded-full absolute top-0 left-64'>
          WEB APP
        </button>
      </div>
      <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-6 absolute right-16 '>
        <HiArrowSmallRight className='text-6xl' />
      </div>
    </div>
  );
}
