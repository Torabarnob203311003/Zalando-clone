import React from 'react'

export default function Hero4({ }) {
    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center justify-between mt-16 px-20 py-10 bg-blue-300">
                <div className="max-w-lg pb-32 pl-60 text-center lg:text-left">
                    <h2 className="text-4xl font-bold">A Gentle Start
                        <span className='font-extralight'> ...Plush and Cuddly pieces</span></h2>
                    <p className="text-xl font-extralight mt-2"> soft launch the year with comfortable</p>
                    <a href="#" className="mt-3  text-2xl inline-block text-black font-semibold hover:border-b  border-black">Shop now →</a>
                </div>
                <div className="flex  mt-6 min-w-80  pr-36 lg:mt-0">

                    <img src="https://img01.ztat.net/banner/9bcebf6e030e4575806e3f602bdddb26/f4c43f7f15dc4f618a5ee1c330707480.jpg?imwidth=693" alt="Model sitting" className="w-80 w-[750px]  h-96 rounded-lg" />
                </div>
            </section>

        </div>
    )
}
