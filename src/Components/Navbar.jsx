import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md flex justify-between items-center p-4">
            <div className="">
                <img src="/logos/logo.png" className="h-12 w-fit" alt="" /></div>
            <ul className="flex gap-8">
                <li><a href="#home" className="text-lg text-gray-700 hover:text-blue-600">Home</a></li>
                <li><a href="#about" className="text-lg text-gray-700 hover:text-blue-600">About Us</a></li>
                <li><a href="#services" className="text-lg text-gray-700 hover:text-blue-600">Services</a></li>
                <li><a href="#products" className="text-lg text-gray-700 hover:text-blue-600">Products</a></li>
                <li><a href="#contact" className="text-lg text-gray-700 hover:text-blue-600">Contact</a></li>
            </ul>
            <div className="flex items-center">
                <input type="text" placeholder="Search" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <button type="button" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Search</button>
            </div>
        </nav>
    );
}

export default Navbar;
