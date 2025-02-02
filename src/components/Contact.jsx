import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-100 mt-24   ">
            {/* Newsletter Section */}
            <section className="flex flex-col lg:flex-row justify-between items-center pb-28 p-10 lg:px-20 bg-gray-100 my-28">
                <div className="max-w-lg">
                    <h2 className="text-3xl font-bold">Deals, drops and trends</h2>
                    <h2 className="text-3xl font-extralight">Straight to your inbox</h2>
                    <p className="text-xl mt-2">
                        Enjoy discounts, find fashion inspiration and discover fresh arrivals with our curated newsletters.
                    </p>
                </div>
                <div className="bg-white p-6 shadow-md rounded-md w-full lg:w-2/5">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full p-3 border border-gray-400 rounded-md mb-3"
                    />
                    <div className="flex items-center gap-4">
                        <label className="flex items-center">
                            <input type="radio" name="fashion" className="mr-2 " />
                            Women's fashion
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="fashion" className="mr-2" />
                            Men's fashion
                        </label>
                    </div>
                    <button className="bg-black text-white py-2 px-4 mt-4 w-full rounded-md hover:bg-gray-800">
                        Sign me up
                    </button>
                    <p className="text-xs text-gray-600 mt-2">
                        To learn how we process your data, visit our{" "}
                        <a href="#" className="text-blue-600 underline">
                            Privacy Notice
                        </a>
                        . You can{" "}
                        <a href="#" className="text-blue-600 underline">
                            unsubscribe
                        </a>{" "}
                        at any time without costs.
                    </p>
                </div>
            </section>

            {/* Footer Links Section */}
            <section className="bg-purple-700 text-white p-10 pt-16 pl-48">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Help & Contact */}
                    <div>
                        <h3 className="font-extralight text-3xl">Help and Contact</h3>
                        <ul className="mt-2 space-y-1 text-base font-bold">
                            <li><a href="#">See all help topics</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Paying by invoice</a></li>
                            <li><a href="#">Return an item</a></li>
                            <li><a href="#">How can I change my contact data?</a></li>
                        </ul>
                    </div>

                    {/* Gift Cards */}
                    <div>
                        <h3 className="font-extralight text-3xl">Gift Cards</h3>
                        <ul className="mt-2 space-y-1 text-base font-bold">
                            <li><a href="#">Buy gift cards</a></li>
                            <li><a href="#">Redeem gift cards</a></li>
                            <li><a href="#">Questions about gift cards</a></li>
                            <li><a href="#">Gift cards for companies</a></li>
                        </ul>
                    </div>

                    {/* About Us */}
                    <div>
                        <h3 className="font-extralight text-3xl">About us</h3>
                        <ul className="mt-2 space-y-1 text-base font-bold">
                            <li><a href="#">Corporate website</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h3 className="font-extralight text-3xl">Our services</h3>
                        <ul className="mt-2 space-y-1 text-base font-bold">
                            <li><a href="#">Connected Retail</a></li>
                            <li><a href="#">Marketing Services</a></li>
                            <li><a href="#">Learn More</a></li>
                        </ul>
                    </div>
                </div>

                {/* Partners & Payment Methods */}
                <div className="flex flex-col lg:flex-row justify-between items-center mt-10">
                    <div>
                        <h3 className="font-bold text-2xl">Our partners</h3>
                        <div className="flex gap-4 mt-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/PostNord_logo.svg/2560px-PostNord_logo.svg.png" alt="PostNord" className="w-20" />
                            <img src="https://www.bing.com/images/search?view=detailV2&ccid=pAxemrIY&id=1BB6B0DA673B8A0FBCFEE776EB829111CB543DD9&thid=OIP.pAxemrIYPO04uwmSi21hdwHaES&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a40c5e9ab2183ced38bb09928b6d6177%3frik%3d2T1UyxGRgut25w%26riu%3dhttp%253a%252f%252ftechcabal.com%252fwp-content%252fuploads%252f2015%252f08%252fdhl_logo876.jpg%26ehk%3dI4ngLHZ5RyK%252fU%252fWhyBgvUDMvE2GGt7kUdsgAtozDN%252fg%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1366&expw=2362&q=DHL&simid=607995107554627214&FORM=IRPRST&ck=4685C41F3573B429DB2772AFC4E7BBC6&selectedIndex=0&itb=0" alt="DHL" className="w-20" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bring_logo.svg/2560px-Bring_logo.svg.png" alt="Bring" className="w-20" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-2xl">Our payment methods</h3>
                        <div className="flex gap-4 mt-2">
                            <img src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png" alt="Visa" className="w-16" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" alt="Mastercard" className="w-16" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="PayPal" className="w-16" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Klarna_Logo.svg/2560px-Klarna_Logo.svg.png" alt="Klarna" className="w-16" />
                        </div>
                    </div>
                </div>

                {/* Back to Top */}
               

                
            </section>

                        
        </footer>
    );
}
