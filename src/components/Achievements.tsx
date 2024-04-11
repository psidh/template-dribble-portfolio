import React from 'react';

export default function Achievements() {
  return (
    <div className='m-16'>
      <div className='grid grid-cols-3 my-24'>
        <div className='border-t-2 border-b-2 border-l-2 border-r-2  p-8 flex flex-col items-center justify-center'>
          <p className='text-8xl'>5 M +</p>
          <p className='text-2xl'>SUCCESS PROJECTS</p>
        </div>
        <div className='border-t-2 border-b-2 p-8 flex flex-col items-center justify-center'>
          <p className='text-8xl'>3 K +</p>
          <p className='text-2xl'>PROJECT LAUNCHES</p>
        </div>
        <div className='border-t-2 border-b-2 border-r-2 border-l-2  p-8 flex flex-col items-center justify-center'>
          <p className='text-8xl'>4 +</p>
          <p className='text-2xl'>YEARS EXPERIENCES</p>
        </div>
      </div>
    </div>
  );
}
