import React from 'react';

const Contact = () => {
    document.title= "Contact";
    return (
        <div>
            <section className="py-6 primaryColor">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-semibold">Contact Us</h1>
			<div className='lg:mt-14 mt-5 md:mt-9'>
 <div className='flex mb-4'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
<div>
<p className='ml-4'><span>Anchal Tower, Sixmile,</span><br /> Guwahati, Assam 7812022, India</p>
</div>
 </div>

   <div className='flex mb-4' >
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
<p className='ml-4 underline'>+918333552221</p>
   </div>
    
   <div className='flex mb-4'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

<p className='ml-4 '>sayestagoswami.pt@gmail.com</p>
   </div>
 </div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				
              <div className='flex'>
              <input type="text" placeholder="First Name" className="block ashColor w-full p-2 px-5  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
                <input type="text" placeholder="Last Name" className="block ashColor w-full p-2 px-5  ml-4 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 " />
              </div>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@jenkins.com" className="block ashColor w-full  p-2 px-5  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  " />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" className="block w-full ashColor  p-2 px-5  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "></textarea>
			</label>
			<button className='backColor w-[200px]  lg:mt-10 md:mt-6 mt-4 lg:px-5 px-3 py-1 rounded text-white'><small>Submit</small></button>
		</form>
	</div>
</section>
        </div>
    );
};

export default Contact;