import React from "react";

function PromotionalBanner() {
    return (
        <div className="w-full mt-12">
           
            <div className="bg-red-700 text-white py-8   h-[350px] pb-48 px-96 flex justify-between items-center">
                <div>
                    <h2 className="text-5xl  font-bold">New Year Cleanout</h2>
                    <p className="text-3xl font-semibold">Sell your items and get 20% more</p>
                    <a href="#" className=" inline-block font-semibold  text-xl">
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
            <div className="bg-gray-300 text-black py-10 px-10 flex items-center justify-between">
                <div>
                    <h3 className="text-2xl font-bold">Feel the warmth</h3>
                    <p className="text-lg">Cosy winter loungewear</p>
                    <a href="#" className="mt-4 inline-block font-semibold underline">
                        Shop now →
                    </a>
                </div>
                <img src="product9.jpg" alt="Winter Loungewear" className="w-80 h-48 object-cover" />
            </div>
        </div>
    );
}

export default PromotionalBanner;
