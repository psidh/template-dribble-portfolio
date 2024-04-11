import React from 'react';

export default function LetsTalk() {
  const pClass = `bg-gradient-to-r from-[#212121] from-5% via-white via-83% to-[#414141] to-12% inline-block text-transparent bg-clip-text`;
  return (
    <div className='text-white bg-black p-32'>
      <div>
        <div className='flex items-center justify-between'>
          <p className='text-black'>X</p>
          <p className={`text-5xl ${pClass}`}>DRIBBLE</p>
          <p className='text-black'>X</p>
          <p className={`text-5xl ${pClass}`}>LINKEDIN</p>
          <p className='text-black'>X</p>
          <p className={`text-5xl ${pClass}`}>BEHANCE</p>
        </div>
        <div className='flex items-center justify-between my-16'>
          <p className={`text-5xl ${pClass}`}>INSTAGRAM</p>
          <p className='text-black'>X</p>
          <p className={`text-5xl ${pClass}`}>FIGMA</p>
          <p className='text-black'>X</p>
          <p className={`text-5xl ${pClass}`}>COMMUNITY</p>
          <p className='text-black'>X</p>
        </div>
      </div>
      <h1 className='text-[145px] mb-8 font-extrabold bg-gradient-to-r from-[#212121] from-2% via-white via-96% to-[#414141] to-2% inline-block text-transparent bg-clip-text text-center w-full'>
        LET'S TALK
      </h1>
      <div className='space-x-8'>
        <button className='text-4xl pt-8 pb-6 px-10 bg-white text-black hover:bg-black hover:text-white border hover:border-white rounded-full'>
          INSTAGRAM
        </button>
        <button className='text-4xl pt-8 pb-6 px-10 bg-white text-black hover:bg-black hover:text-white border hover:border-white rounded-full'>
          DRIBBLE
        </button>
        <button className='text-4xl pt-8 pb-6 px-10 bg-white text-black hover:bg-black hover:text-white border hover:border-white rounded-full'>
          LINKEDIN
        </button>
        <button className='text-4xl pt-8 pb-6 px-10 bg-white text-black hover:bg-black hover:text-white border hover:border-white rounded-full'>
          CONTACT ME
        </button>
      </div>
      <div className='flex justify-between items-center mt-12'>
        <p className='text-xl text-[#8b8b8b]'> <span className='text-white'>©PORTFOLIO.</span>  ALL RIGHTS RESERVED</p>
        <p className='text-xl text-[#8b8b8b]'> DESIGNED BY <span className='text-white'>P SIDHARTH</span></p>
      </div>
    </div>
  );
}
