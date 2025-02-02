export default function ShoeCard() {
    return (
        <div className="flex items-center justify-center mt-11 pt-28 pb-44  pt-5 bg-black">
            <div className="flex bg-black text-white max-w-5xl w-full rounded-lg overflow-hidden items-center justify-between p-6">
                {/* Left Section - Image */}
                <div className="w-1/2 flex justify-center">
                    <img
                        src="https://img01.ztat.net/cnt/contentful-apps/uploads/d05effa1-abc9-418b-b373-a595ae56fc9e.jpeg?imwidth=1280"
                        className="rounded-lg w-full h-auto max-w-md"
                    />
                </div>

                {/* Right Section - Text Content */}
                <div className="w-1/2 pl-6">
                    <img src="/nike-logo.png" alt="Nike Logo" className="h-8 mb-4" />
                    <h2 className="text-4xl font-bold whitespace-nowrap">
                        Air Zoom Spiridon Cage 2
                    </h2>
                    <p className="text-2xl font-medium mt-2 text-gray-300 whitespace-nowrap">
                        Nike’s shiny, comfy, y2k masterpiece
                    </p>
                    <button className="mt-4 px-8 py-3 bg-white text-black font-bold text-lg rounded-lg">
                        Read Now
                    </button>
                </div>
            </div>
        </div>
    );
}
