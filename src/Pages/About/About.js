import React from "react";
import doctor from "../../Resorces/doctor.png";

const About = () => {
  document.title= "About";
   
  return (
    <div>
       
      <div className="primaryColor font-normal App text-3xl lg:my-[135px] my-14">
        <h1>About Me</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mb-64 mb-28">
        <div className="lg:ml-24 mx-10 App">
          <img src={doctor} alt="" />
          <button className="whiteColor shadow-lg shadow-slate-800 lg:mt-8 mt-4 px-8 py-4 rounded">
            <small>Contact Dr. Goswami</small>
          </button>
        </div>
        <div className="mx-16 lg:mt-0 mt-10">
          <h1 className="lg:w-[564px] bodyFont leading-9">
            Hello, I have completed an undergraduate degree in psychology at
            Delhi University, subsequently pursued graduate training in
            counseling psychology at the AIIMS Delhi, and completed a doctorate
            in clinical psychology at the Adler School of Professional
            Psychology. I have clinical interests and worked with children,
            teens, adults, diagnostic assessment and addictions. I use a broad
            range of cognitive behavioral and insight oriented techniques in the
            psychotherapy and counseling process. I have also taught a broad
            variety of graduate psychology and counseling courses at the Delhi
            University and Jamia Milia Islamia. I have lectured and presented
            training seminars and workshops nationally and internationally in
            Europe and East Asia. My research and publication interests have
            included addictions, psychometrics, clinical training and
            supervision, and the integration of spiritual values in
            psychotherapy and supervision.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
