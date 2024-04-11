import Image from 'next/image';

export default function Projects() {
  return (
    <div className='m-16 mt-32 flex space-x-8 items-center justify-between'>
      <div className='flex flex-col justify-between items-start'>
        <Image src={'/left.png'} width={600} height={1400} alt='left'/>
        <p className='text-6xl font-semibold mt-12'>APP DESIGN</p>
        <p className='text-3xl mt-4 font-semibold'>SOLAR PANEL MOBILE APP</p>
      </div>
      <div className='flex flex-col justify-between items-start'>
        <Image src={'/right.png'} width={600} height={1400} alt='right' />
        <p className='text-6xl font-semibold mt-12'>FURNITURE APP</p>
        <p className='text-3xl mt-4 font-semibold'>OUR GROUNDBREAKING FURNITURE</p>
      </div>
    </div>
  );
}
