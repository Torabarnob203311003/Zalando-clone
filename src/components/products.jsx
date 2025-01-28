import React, { useRef, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons

function Products() {
    // Array of products (dynamic data)
    const products = [
        { id: 1, image: 'product4.jpg', brand: 'PULL&BEAR', name: 'BAGGY - Tracksuit bottoms', price: '229,00 kr' },
        { id: 2, image: 'product4.jpg', brand: 'ZARA', name: 'SLIM FIT - Denim Jeans', price: '399,00 kr' },
        { id: 3, image: 'product4.jpg', brand: 'H&M', name: 'RELAXED - Hoodie', price: '299,00 kr' },
        { id: 4, image: 'product4.jpg', brand: 'Nike', name: 'Air Max Shoes', price: '1.199,00 kr' },
        { id: 5, image: 'product5.jpg', brand: 'Adidas', name: 'Ultraboost Shoes', price: '1.499,00 kr' },
        { id: 6, image: 'product4.jpg', brand: 'Levi’s', name: 'Classic Denim Jacket', price: '899,00 kr' },
        { id: 7, image: 'product4.jpg', brand: 'Gucci', name: 'Luxury Leather Belt', price: '2.499,00 kr' },
        { id: 8, image: 'product4.jpg', brand: 'Ralph Lauren', name: 'Polo T-Shirt', price: '499,00 kr' },
        { id: 9, image: 'product4.jpg', brand: 'Hugo Boss', name: 'Formal Suit', price: '4.299,00 kr' },
        { id: 10, image: 'product4.jpg', brand: 'Tommy Hilfiger', name: 'Casual Shirt', price: '799,00 kr' },
        { id: 11, image: 'product4.jpg', brand: 'Reebok', name: 'Crossfit Training Shoes', price: '1.299,00 kr' },
        { id: 12, image: 'product4.jpg', brand: 'Uniqlo', name: 'Heattech Thermal Wear', price: '399,00 kr' },
        { id: 13, image: 'product4.jpg', brand: 'Calvin Klein', name: 'Cotton Boxer Briefs', price: '249,00 kr' },
        { id: 14, image: 'product4.jpg', brand: 'The North Face', name: 'Winter Puffer Jacket', price: '1.999,00 kr' },
        { id: 15, image: 'product4.jpg', brand: 'Patagonia', name: 'Backpack', price: '1.099,00 kr' },
        { id: 16, image: 'product4.jpg', brand: 'Columbia', name: 'Waterproof Hiking Boots', price: '1.699,00 kr' },
    ];

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
        <div className="px-8 py-12">
            {/* Horizontal Scrollable Container */}
            <section
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-scroll hide-scrollbar  h-full p-4 rounded-lg"
            >
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="min-w-[200px] min-h-[300px] bg-white  rounded-lg shadow-md flex-shrink-0 relative"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-72 rounded-lg  "
                        />
                        <button
                            onClick={() => toggleLike(product.id)}
                            className="absolute top-4 right-4 text-red-600 text-xl"
                        >
                            {likedProducts[product.id] ? <FaHeart /> : <FaRegHeart />}
                        </button>
                        <div className=" pb-4 pl-4">
                            <h3 className="mt-4 text-sm text-gray-600">{product.brand}</h3>
                            <p className="text-lg font-semibold">{product.name}</p>
                            <p className="text-gray-500">{product.price}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Products;
