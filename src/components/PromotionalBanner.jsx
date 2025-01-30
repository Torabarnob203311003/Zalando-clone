import React from "react";

function PromotionalBanner() {
    return (
        <div className="w-full mt-12">
           
            <div className="bg-red-700 text-white py-8   h-[350px] pb-48 px-96 flex justify-between items-center">
                <div>
                    <h2 className="text-5xl  font-bold">New Year Cleanout</h2>
                    <p className="text-3xl font-semibold">Sell your items and get 20% more</p>
                    <a href="#" className=" mt-10 inline-block font-semibold  text-xl">
                        Start now →
                    </a>
                </div>
                <img src="promotion2.jpg" alt="Clothing Items" className=" w-[450px] ms-10  mt-44 object-cover" />
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-900 text-white py-4 flex justify-center text-lg font-bold">
                <h1 className=" pr-[840px]">Ends in</h1>
                <span>03</span> <span className="text-sm mx-1">Days</span>
                <span>17</span> <span className="text-sm mx-1">Hrs</span>
                <span>12</span> <span className="text-sm mx-1">Min</span>
                <span>32</span> <span className="text-sm mx-1">Sec</span>
            </div>

            {/* Winter Collection */}
            <div className="bg-gray-300 text-black mt-16 py-24 px-96 flex items-center justify-between">
                <div>
                    <h3 className="text-5xl  font-bold">Feel the warmth</h3>
                    <p className="text-3xl font-semibold">Cosy winter loungewear</p>
                    <a href="#" className="inline-block mt-10 font-semibold  text-xl">
                        Shop now →
                    </a>
                </div>
                <img src="https://img01.ztat.net/banner/18032221892544e4ab31f4da157e4a39/926bba6fb2864410a9cc5773e993d1d2.jpg?imwidth=1200" alt="Winter Loungewear" className="-20 h-72 object-cover" />
            </div>
        </div>
    );
}

export default PromotionalBanner;
