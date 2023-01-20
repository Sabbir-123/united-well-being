import React from 'react';
import front from "../../../Resorces/front.png"

const Banner = () => {
    return (
        <div className='mt-[82px]'>
        <div className='whiteColor'>
          <div className='grid grid-cols-2'>
            <div className='primaryColor  lg:mt-28 md:mt-20 mt-10 App'>
<h1 className='lg:text-6xl text-2xl md:text-2xl  miama'>Growth, healing and hope</h1>
<h1 className='lg:text-[28px] md:text-2xl text-[10px] mt-2'>From the comfort of your own space</h1>
<h1 className='lg:text-[20px] lg:block hidden mt-4'>Individual therapy for adults</h1>
<button className='backColor  lg:mt-10 md:mt-6 mt-4 lg:px-5 px-3 py-1 rounded text-white'><small>Book Session</small></button>
            </div>
            <div className='background'>
<img src={front} alt="" />
            </div>
            </div> 
        

        </div>
    </div>
    );
};

export default Banner;