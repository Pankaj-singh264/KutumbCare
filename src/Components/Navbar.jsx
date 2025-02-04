import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between fixed top-0 left-0 w-full items-center p-4 hover:bg-white z-10">
                <img src="/logos/logo.png" className="h-12 w-fit mix-blend-difference " alt="" />
                <ul className="flex gap-8">
                    <li><a href="#home" className="text-xl text-gray-700 font-extrabold tracking-wide">Home</a></li>
                    <li><a href="#about" className="text-xl text-gray-700 font-extrabold tracking-wide">About Us</a></li>
                    <li><a href="#services" className="text-xl text-gray-700 font-extrabold tracking-wide">Services</a></li>
                    <li><a href="#products" className="text-xl bg-amber-600 px-2 py-1 text-gray-700 font-extrabold tracking-wide">Products</a></li>
                    <li><a href="#contact" className="text-xl  text-gray-700 font-extrabold tracking-wide">Contact</a></li>
                </ul>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                    <button type="button" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Search</button>
                </div>
            </nav>
            <div className='relative h-[100vh] w-full -mt-20 '>
                <img className="h-fit bg-transparent" src="/img/pic50.jpg" alt="" />
                <div className="absolute left-20 top-[50vh] p-6  text-white flex flex-col gap-6">
                    <div className="mainHeading">
                        <h1 className="text-5xl font-extrabold tracking-wide">let Intelligence </h1>
                        <h1 className="text-5xl font-extrabold tracking-wide">sign in Emergencies</h1>
                    </div>
                    <div className="para ">
                        <p className="font-light text-lg tracking-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus adipisci minima sint aut quas repellendus! </p>
                        <p className="font-light text-lg tracking-normal"> Molestias labore dolorum consectetur iste, porro laboriosam modi repellat ipsa eligendi maiores</p>
                    </div>
                    <button className="bg-transparent border w-fit cursor-pointer border-gray-500 text-white py-2 px-6 rounded hover:bg-gray-800 ">
                        Learn More
                    </button>

                </div>
            </div>
        </>
    );
}

export default Navbar;
