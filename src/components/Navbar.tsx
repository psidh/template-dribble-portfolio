import React from 'react';
import { CiBasketball } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';
import { TiSocialLinkedin } from 'react-icons/ti';
import { IoIosMenu } from 'react-icons/io';

export default function Navbar() {
  return (
    <section className='px-16 pt-12 flex items-center justify-between overflow-none'>
      <div>
        <h1 className='text-5xl'>PORTFOLIO</h1>
      </div>
      <div className='flex items-center justify-center'>
        <p className='px-10 py-2 border border-[#adadad] rounded-full'>Home</p>
        <p className='px-10 py-2 border border-[#adadad] rounded-full'>
          About Me
        </p>
        <p className='px-10 py-2 border border-[#adadad] rounded-full'>
          Services
        </p>
        <p className='px-10 py-2 border border-[#adadad] rounded-full'>
          Projects
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <CiBasketball className='text-5xl border border-[#adadad] rounded-full p-1' />
        <FaInstagram className='text-5xl border border-[#adadad] rounded-full p-1' />
        <TiSocialLinkedin className='text-5xl border border-[#adadad] rounded-full p-1' />
        <div className='px-4 py-1 border border-[#adadad] rounded-full '>
          <IoIosMenu className='text-4xl' />
        </div>
      </div>
    </section>
  );
}
