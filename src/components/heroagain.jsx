 import React from 'react'
 
 function Heroagain() {
   return (
       <div>
           <section className="flex flex-col lg:flex-row items-center justify-between mt-16 px-20 py-10 bg-gray-300">
               <div className="max-w-lg pb-32 pl-60 text-center lg:text-left">
                   <h2 className="text-3xl font-extrabold">Feel the Zalando</h2>
                   <p className="text-2xl font-semibold mt-2">Cosy winter Formal;</p>
                   <a href="#" className="mt-3  text-xl inline-block text-black font-semibold hover:border-b  border-black">Shop now →</a>
               </div>
               <div className="flex gap-16 mt-6   pr-36 lg:mt-0">
                   <video src="https://mosaic01.ztat.net/brn/cms/media/video/c313b13e-b359-4ba0-b5f2-d0a5ef598d65.mp4" className="w-full h-96 object-cover rounded-lg" autoPlay loop muted />
                 
               </div>
           </section>

       </div>
   )
 }
 
 export default Heroagain;