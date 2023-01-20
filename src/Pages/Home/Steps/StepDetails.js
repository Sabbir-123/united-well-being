import React from "react";

const StepDetails = ({ singleDetails }) => {
  const { number, head, Details } = singleDetails;
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md whiteColor h-60 ">
       <div className="ashColor lg:mx-[115px] mx-[95px] p-2 border-orange-900 border rounded-full grid justify-center ">
        {number}
       </div>
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
          {head}
          </h2>
        </div>
        <p>
         {Details}
        </p>
      </div>
    
    </div>
  );
};

export default StepDetails;
