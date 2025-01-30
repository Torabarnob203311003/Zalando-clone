import React from 'react'

function ProductSection() {
  return (
      <div>
          <section className="flex flex-col lg:flex-row items-center justify-between mt-16 px-20 py-10 bg-red-600">
              <div className="max-w-lg pb-32 pl-60 mt-5 text-center lg:text-left">
                  <h2 className="text-3xl font-extrabold">What do i wear</h2>
                  <h2 className="text-3xl font-thin">...to be basic but not boring</h2>
                  <p className="text-2xl font-semibold mt-2">kick of 2025 with a masterclass in how to style strong</p>
                  <a href="#" className="mt-3  text-xl inline-block text-black font-semibold hover:border-b  border-black">Shop Nordic trends →</a>
              </div>
              <div className="flex gap-16 mt-6  w-[650px]  pr-36 lg:mt-0">
                  <video src="vedio3.mp4" className="w-full h-96 object-cover rounded-lg" autoPlay loop muted />
             
              </div>
          </section>

      </div>
  )
}

export default ProductSection