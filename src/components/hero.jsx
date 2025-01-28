 import React from 'react'
 
 export default function Hero() {
   return (
     <div>
           <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-gray-300">
               <div className="max-w-lg text-center lg:text-left">
                   <h2 className="text-3xl font-bold">Feel the warmth</h2>
                   <p className="text-lg mt-2">Cosy winter loungewear</p>
                   <a href="#" className="mt-4 inline-block text-black font-semibold border-b border-black">Shop now →</a>
               </div>
               <div className="flex gap-4 mt-6 lg:mt-0">
                   <img src="/path-to-image1.jpg" alt="Model in hoodie" className="w-48 rounded-lg" />
                   <img src="/path-to-image2.jpg" alt="Model sitting" className="w-48 rounded-lg" />
               </div>
           </section>

     </div>
   )
 }
 