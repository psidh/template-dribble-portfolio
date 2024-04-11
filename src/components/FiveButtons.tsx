import { HiArrowSmallRight } from 'react-icons/hi2';

export default function FiveButtons() {
  return (
    <div className='flex flex-col justify-center items-center m-32'>
      <div className='flex w-full cursor-pointer'>
        <p className='px-10 py-8 border rounded-full hover:bg-black hover:text-white transition duration-300'>1</p>
        <button className='w-full border p-2 px-12 rounded-full text-6xl hover:bg-black hover:text-white transition duration-300'>UI</button>
        <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-4 hover:bg-black hover:text-white transition duration-200 hover:-rotate-45'>
          <HiArrowSmallRight className='text-6xl' />
        </div>
      </div>
      <div className='flex w-full cursor-pointer'>
        <p className='px-10 py-8 border rounded-full  hover:bg-black hover:text-white transition duration-300'>2</p>
        <button className='w-full border p-2 px-12 rounded-full text-6xl  hover:bg-black hover:text-white transition duration-300'>WEB DESIGN</button>
        <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-4 hover:bg-black hover:text-white transition duration-200 hover:-rotate-45'>
          <HiArrowSmallRight className='text-6xl' />
        </div>
      </div>
      <div className='flex w-full cursor-pointer'>
        <p className='px-10 py-8 border rounded-full  hover:bg-black hover:text-white transition duration-300'>3</p>
        <button className='w-full border p-2 px-12 rounded-full text-6xl  hover:bg-black hover:text-white transition duration-300'>LANDING PAGE</button>
        <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-4 hover:bg-black hover:text-white transition duration-200 hover:-rotate-45'>
          <HiArrowSmallRight className='text-6xl' />
        </div>
      </div>
      <div className='flex w-full cursor-pointer'>
        <p className='px-10 py-8 border rounded-full  hover:bg-black hover:text-white transition duration-300'>4</p>
        <button className='w-full border p-2 px-12 rounded-full text-6xl  hover:bg-black hover:text-white transition duration-300'>UI FIGMA DESIGN</button>
        <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-4 hover:bg-black hover:text-white transition duration-200 hover:-rotate-45'>
          <HiArrowSmallRight className='text-6xl' />
        </div>
      </div>
      <div className='flex w-full cursor-pointer'>
        <p className='px-10 py-8 border rounded-full  hover:bg-black hover:text-white transition duration-300'>5</p>
        <button className='w-full border p-2 px-12 rounded-full text-6xl  hover:bg-black hover:text-white transition duration-300'>MOBILE APP DESIGN</button>
        <div className='border border-[#dbdbdb] text-[#343434] inline-block rounded-full p-4 hover:bg-black hover:text-white transition duration-200 hover:-rotate-45'>
          <HiArrowSmallRight className='text-6xl' />
        </div>
      </div>
    </div>
  );
}
