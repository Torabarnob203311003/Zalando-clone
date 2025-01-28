 import React from 'react'
 
 export default function Hero() {
   return (
     <div>
           <section className="flex flex-col lg:flex-row items-center justify-between mt-16 px-20 py-16 bg-gray-300">
               <div className="max-w-lg pb-32 pl-60 text-center lg:text-left">
                   <h2 className="text-3xl font-extrabold">Feel the warmth</h2>
                   <p className="text-lg font-semibold mt-2">Cosy winter loungewear</p>
                   <a href="#" className="mt-3  text-xl inline-block text-black font-semibold hover:border-b  border-black">Shop now →</a>
               </div>
               <div className="flex gap-16 mt-6  pr-36 lg:mt-0">
                   <img src=" model-huddie.jpg" alt="Model in hoodie" className="w-80  h-80 rounded-lg " />
                   <img src="model-huddie-2.jpg" alt="Model sitting" className="w-80   h-80 rounded-lg" />
               </div>
           </section>

     </div>
   )
 }
 