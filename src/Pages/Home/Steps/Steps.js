import React from 'react';
import StepDetails from './StepDetails';

const Steps = () => {
    const detailsStep= [
        {
            number:1,
            head: "Choose A Package",
            Details: "Choose between two types of packages, Depending upon on your requirement and need."
        },
        {
            number:2,
            head: "Connect With Your Therapist",
            Details: "Fill out our form and complete the payment process I Will shortly be in touch with you ."
        },
        {
            number:3,
            head: "Begin Your Healing Journey",
            Details: "Start your session with Me, a step towards healing."
        },
    ]
    return (
        <div className='bodyFont'>
         <div className='App lg:mb-20 mb-10 mx-10'>
         <h1 className='primaryColor bodyFont lg:text-[26px] text-lg'>Start Online Psychologist Consultation With Three Easy Steps</h1>
         </div>
         <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mx-[146px] mx-12 gap-4'>
            {
detailsStep?.map((singleDetails, i)=><StepDetails key={i} singleDetails={singleDetails} ></StepDetails>)
            }
         </div>
      <div className='App lg:mb-28 mb-14'>
      <button className='backColor  shadow-slate-900 lg:mt-10 md:mt-6 mt-4 lg:px-5 px-3 py-1 rounded text-white'><small>Book Session</small></button>
      </div>
        </div>
    );
};

export default Steps;