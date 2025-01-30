import React, { useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

function Products({ products, color,imgstyle }) {
    // Array of products (dynamic data)

    console.log(color)


    // State to track liked products
    const [likedProducts, setLikedProducts] = useState({});

    // Reference for the horizontal scroll container
    const scrollContainerRef = useRef(null);

    // Function to toggle like status
    const toggleLike = (productId) => {
        setLikedProducts((prevLiked) => ({
            ...prevLiked,
            [productId]: !prevLiked[productId], // Toggle the current liked status
        }));
    };

    return (
        <div className={`py-12 mt-10 ${color}`}>
            {/* Horizontal Scrollable Container */}
            <section
                ref={scrollContainerRef}
                className="pl-72 flex gap-6 overflow-x-scroll hide-scrollbar scroll-smooth w-full p-4 rounded-lg"
                style={{
                    scrollPaddingLeft: '1023px', // Custom scroll padding for smooth scroll
                }}
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="min-w-[200px] min-h-[300px] bg-white rounded-lg shadow-md flex-shrink-0 relative"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className= {` ${imgstyle}`} // Fixed width and height
                        />
                        <button
                            onClick={() => toggleLike(product.id)}
                            className="absolute top-4 right-4 text-red-600 text-xl"
                        >
                            {likedProducts[product.id] ? <FaHeart /> : <FaRegHeart />}
                        </button>
                        <div className="pb-4 pl-4">
                            <h3 className="mt-4 text-xl text-black">{product.name}</h3>
                            <p className="text-lg font-semibold">{product.price}</p>
                            <p className=" font-semibold text-gray-800"> AvailablePieces :{product.availablePieces}</p>
                            <p className=" font-semibold text-gray-800">unitsSold:{product.unitsSold}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Products;
