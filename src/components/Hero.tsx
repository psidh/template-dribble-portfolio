import { HiArrowSmallRight } from 'react-icons/hi2';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='mx-24'>
      <div className='flex flex-col items-center justify-center'>
        <div className='text-[156px] w-full flex flex-col items-center justify-center space-y-2 mt-16 font-bold'>
          <h1>EXPLORE MY</h1>
          <h2 className=''>PORTFOLIO</h2>
        </div>
        <div>
          <Image
            src={'/person.png'}
            width={300}
            height={900}
            alt='Person Picture'
            className='absolute top-[610px] left-[564px]'
          />
        </div>
        <div className='w-full flex justify-between py-2 items-start'>
          <h3 className='text-5xl'>DESIGNER EST. 2000</h3>

          <div className='flex flex-col justify-end items-end text-2xl'>
            <p>I AM PASSIONATE</p>
            <p>CREATING WEBSITES THAT</p>
            <p>STAND OUT FROM THE</p>
            <p>CROWD.</p>
          </div>
        </div>
      </div>
      <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-6 ml-12 rotate-45'>
        <HiArrowSmallRight className='text-6xl' />
      </div>

      <div className='flex flex-row justify-end items-start text-3xl'>
        <div className='flex flex-col justify-start items-end space-y-8'>
          <p>UI/UX</p>
          <p>WEBSITE</p>
          <p>LANDING PAGE</p>
          <p>UI FIGMA DESIGN</p>
          <p>EXPERT WEBFLOW</p>
        </div>
      </div>
    </div>
  );
}
