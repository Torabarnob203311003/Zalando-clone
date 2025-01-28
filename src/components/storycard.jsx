import React from "react";

function StoryCard({ title, image, description }) {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-lg overflow-hidden shadow-lg min-w-[300px] mx-2">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
}

function App() {
    const stories = [
        {
            title: "The North Face x Bialetti",
            image: "https://via.placeholder.com/300x200",
            description: "Coffee with a view just peaked",
        },
        {
            title: "Sneaker Rotation",
            image: "https://via.placeholder.com/300x200",
            description: "2025 sneaker predictions",
        },
        {
            title: "The Perfect Winter Running Shoes",
            image: "https://via.placeholder.com/300x200",
            description: "Ruddy Trobrillant brings footwear advice",
        },
        {
            title: "Timberland",
            image: "https://via.placeholder.com/300x200",
            description: "5 main character looks with limited-edition woven Timberlands",
        },
        {
            title: "New year, new look",
            image: "https://via.placeholder.com/300x200",
            description: "Matthew Zorpas’ 2025 style",
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-white mb-4">
                Stories that Inspire
            </h2>
            <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800">
                {stories.map((story, index) => (
                    <StoryCard key={index} {...story} />
                ))}
            </div>
        </div>
    );
}

export default App;
