import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Banner() {
    const navMenu = [
     
        { name: "Clothing" },
        { name: "Shoes" },
        { name: "Accessories" },
        { name: "Street Wear" },
        { name: "Sports" },
        { name: "Designer" },
        { name: "Care" },
        { name: "Sell" },
        { name: "Second Hand" },
    ];

    return (
        <div className="bg-orange-700 text-white  text-start">
            {/* Banner Content */}
           <div className=" pl-72 pt-6">

                <h1 className="text-3xl font-extrabold">Up to 70% off even more styles</h1>
                <p className="text-2xl font-semibold">Unbelievable discounts in the Winter Sale</p>
                <button className="mt-4 flex items-center font-bold gap-2 text-white">
                    Save now <FaArrowRight />
                </button>

           </div>
            {/* Horizontal Navigation Menu */}

            <div className=" bg-black bg-opacity-30 h-full  w-full ">


                <div className="mt-6 pl-72 flex gap-6  p-4">
                    <span className="text-lg font-semibold mt-1 text-white">Explore more:</span>
                    {navMenu.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className="px-4 py-2 font-semibold text-white hover:underline rounded-lg"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
     </div>
           
        </div>
    );
}

export default Banner;
