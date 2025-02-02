import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer2() {
    return (
        <footer className="bg-black text-white p-6">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                {/* Links Section */}
                <div className="space-y-2 text-base font-semibold">
                    <a href="#" className="hover:underline">Tech Blog</a> |
                    <a href="#" className="hover:underline"> Imprint</a> |
                    <a href="#" className="hover:underline"> Terms & Conditions</a> |
                    <a href="#" className="hover:underline"> Privacy Notice</a> |
                    <a href="#" className="hover:underline"> Data preferences</a>
                    <p className="mt-2 font-semibold text-red-500">Community guidelines</p>
                </div>

                {/* App Download Section */}
                <div className="flex flex-col items-center">
                    <p className="font-semibold">Zalando Apps:</p>
                    <div className="flex space-x-2 mt-2">
                        <img
                            src="/qr-code.png"
                            alt="QR Code"
                            className="w-16 h-16 bg-white p-1 rounded"
                        />
                        <div className="flex flex-col space-y-2">
                            <button className="bg-gray-800 px-4 py-2 rounded flex items-center">
                                <img src="/app-store.png" alt="App Store" className="h-5" />
                            </button>
                            <button className="bg-gray-800 px-4 py-2 rounded flex items-center">
                                <img src="https://www.freepnglogos.com/images/app-store-png-logo-33109.html" alt="Google Play" className="h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center">
                    <p className="font-semibold">You can also find us on</p>
                    <div className="flex space-x-3 mt-2">
                        <FaFacebook className="text-white text-2xl cursor-pointer" />
                        <FaInstagram className="text-white text-2xl cursor-pointer" />
                    </div>
                </div>
                
            </div>
            <div className="text-right mt-6 ">
                <button className="bg-gray-500 text-black px-4 py-2  text-xl rounded-md hover:bg-white">
                    Go to Top ↑
                </button>
            </div>
          

           
        </footer>
        
    );
}
