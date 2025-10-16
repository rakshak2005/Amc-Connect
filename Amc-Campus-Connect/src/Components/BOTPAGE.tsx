import * as React from 'react';

interface IBOTPAGEProps {
}

const BOTPAGE: React.FunctionComponent<IBOTPAGEProps> = () => {
  return (
    <>
    <div className='h-[8vh] bg-HEADER flex justify-between items-center font-bold text-[2.5vh] ml-[5vh] '>
     <h1 className='text-white'>Campus Connect</h1>
     <div className='text-white flex gap-[3vh]'>
      <a href='#'>Home</a>
      <a href='#'>Features</a>
      <a href='#'>Timetable</a>
      <a href='#'>Contact Us</a>
     </div>
     <div>
      <button className='border border-blue-600 rounded-lg text-white p-2 mr-[4vh]'> Admin Login</button>
     </div>
    </div>
    <div className='w-full h-[85vh] bg-white '>
      <iframe className='w-full h-full' src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/30/04/20250830045902-KCR4BZSR.json" ></iframe>
    </div>
    <div className='h-[10vh] bg-HEADER relative bottom-[5vh]'>
      <h1 className='text-white text-center pt-[3vh]'>© 2024 Campus Connect. All rights reserved B-18 | Sushanth | Unathi | Sampath | Rakshak |</h1>
    </div>
   </>
  ) ;
};

export default BOTPAGE;

