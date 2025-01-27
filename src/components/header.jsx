import React from 'react'

function Header() {
    return (
        <div>
            <header className="flex justify-between items-center gap-8 bg-gray-200 p-3 text-sm">
                <div className="text-center pl-72 " >
                    <a href="#" className="mr-4  font-bold text-gray-500  ">Help and contact</a>
                </div>
                <div>
                    <span className="mr-96  font-bold  text-gray-500 ">Free standard delivery over 299 kr*</span>
                    <span className="mr-96  font-bold  text-gray-500   ">30-day return policy</span>
                </div>
            </header></div>
    )
}

export default Header