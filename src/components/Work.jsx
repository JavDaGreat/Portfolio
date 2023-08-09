import React from 'react';
import { data } from "./data/data.js";


const Work = () => {

    const project = data;
  
  return (
    <div name='work' className='w-full md:h-screen  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:h-96">
          
          {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image}) ` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md object-contain	
              flex justify-center text-center items-center mx-auto content-center border-2 "
  >
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font-bold text-white tracking-wider bg-black px-2 py-2">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
          >
            Code
          </button>
        </a>
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );
};

export default Work;
