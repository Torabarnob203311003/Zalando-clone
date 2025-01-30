import React, { useRef } from "react";

function StoryCard() {
    // Sample stories data
    const stories = [
        { id: 1, type: "image", src: "product8.jpg", brand: "The North Face x Bialetti", title: "Coffee with a view", description: "Just peaked" },
        { id: 2, type: "video", src: "vedio1.mp4", brand: "Sneaker Rotation", title: "2025 sneaker predictions", description: "Our hottest picks for the New Year" },
        { id: 3, type: "image", src: "product7.jpg", brand: "ASICS", title: "ASICS GEL-NYC", description: "The cult favourite blooms for spring" },
        { id: 4, type: "video", src: "vedio2.mp4", brand: "Saucony", title: "2025 is Saucony’s year", description: "Here’s what you need to know" },
        { id: 5, type: "image", src: "product1.jpg", brand: "Fashion", title: "New year, new look", description: "Matthew Zorpas’ 2025 style" },
        { id: 6, type: "video", src: "vedio1.mp4", brand: "Fashion", title: "New year, new look", description: "Matthew Zorpas’ 2025 style" },
        { id: 7, type: "image", src: "product4.jpg", brand: "Fashion", title: "New year, new look", description: "Matthew Zorpas’ 2025 style" },
    ];

    const scrollContainerRef = useRef(null);

    return (
        <div className="py-12 pl-64 bg-black text-white">
            <h2 className="text-4xl font-bold px-10">Stories that inspire</h2>
            <p className="text-3xl font-thin  px-10 ">Curated weekly</p>

            <section
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-scroll hide-scrollbar scroll-smooth w-full p-6"
            >
                {stories.map((story) => (
                    <div key={story.id} className="min-w-[280px] min-h-[290px] bg-gray-900 rounded-lg shadow-md flex-shrink-0 relative overflow-hidden">
                        {story.type === "image" ? (
                            <img src={story.src} alt={story.title} className="w-full h-96 object-cover rounded-lg" />
                        ) : (
                            <video src={story.src} className="w-full h-96 object-cover rounded-lg" autoPlay loop muted />
                        )}
                        <div className="absolute  font-bold bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                            <h3 className="text-3xl font-bold">{story.brand}</h3>
                            <p className="text-md">{story.title}</p>
                            <p className="text-sm text-gray-400">{story.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default StoryCard;
