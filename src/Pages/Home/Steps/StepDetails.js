import React from "react";

const StepDetails = ({ singleDetails }) => {
  const { number, head, Details } = singleDetails;
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md whiteColor h-60 dark:text-gray-50">
       <div className="ashColor mx-[115px] p-2 border-orange-900 border rounded-full grid justify-center ">
        {number}
       </div>
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">
          {head}
          </h2>
        </div>
        <p className="dark:text-gray-100">
         {Details}
        </p>
      </div>
    
    </div>
  );
};

export default StepDetails;