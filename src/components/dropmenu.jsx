import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const DropMenu = () => {
    const navMenu = [
        { name: "Nordic Looks", submenu: ["Winter Wear", "Summer Looks"] },
        { name: "New In", submenu: ["Latest Trends", "Trending Now"] },
        { name: "Clothing", submenu: ["T-Shirts", "Jeans", "Jackets", "Dresses"] },
        { name: "Shoes", submenu: ["Sneakers", "Boots", "Heels"] },
        { name: "Accessories", submenu: ["Bags", "Hats", "Watches"] },
        { name: "Street Wear", submenu: ["Hoodies", "Joggers"] },
        { name: "Sports", submenu: ["Activewear", "Outdoor Gear"] },
        { name: "Designer", submenu: ["Luxury Brands", "Exclusive Pieces"] },
        { name: "Care", submenu: ["Skincare", "Self-Care Essentials"] },
        { name: "Sell", submenu: ["List Your Items", "Selling Guide"] },
        { name: "Second Hand", submenu: ["Vintage Finds", "Pre-loved Clothing"] },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="relative">
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4">
                {navMenu.map((item, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <a
                            href="#"
                            className="block px-4 py-2 font-semibold text-gray-900 hover:underline"
                        >
                            {item.name}
                        </a>
                        {activeIndex === index && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                                {item.submenu.map((subitem, subIndex) => (
                                    <a
                                        key={subIndex}
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {subitem}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="relative mb-4 text-black">
                    <input 
                        type="text"
                        placeholder = "Search..."
                        className="block w-full p-2 pl-10 text-black border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                    <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xl">
                        <CiSearch className="text-black text-2xl" />
                    </span>
                </div>
            </div>
          
        </div>
    );
};

export default DropMenu;
