import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="overflow-hidden w-full relative h-4/6 bg-gradient-to-r from-gray-600/80 to-transparent">
       <img
          alt="imagen"
          className="object-cover  w-full absolute inset-0 h-full -z-10"
          src="https://cdn.wallpapersafari.com/74/36/74zkfl.png"
        />
     
      <div className="w-[98%] p-4  flex justify-between items-center mt-5  mx-auto ">
        <div >
          <h1 className="text-white text-3xl font-semibold">Ghibli<span className="text-blue-500">Wik</span></h1>
        </div>

        <ul className="text-white flex items-end justify-end gap-14 capitalize ">
        <Link to={"/"}>
            <li className="">Home</li>
        </Link>
          
        <Link to={"/perso"}>
            <li className="">Characters</li>
        </Link>
        <Link to={"/films"}>
            <li className="">Films</li>
        </Link>
        <Link to={"/locations"}>
            <li className="">Locations</li>
        </Link>
        </ul>
      </div>

      <div className="w-[98%] mx-auto flex justify-center my-10 items-center sm:justify-start ">
        <div className="transform -rotate-90 text-white hidden sm:block">
          <p>Lorem ipsum dolor sit amet, </p>
        </div>
        
        <div className="w-96 gap-3 flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-white font-DMSans ">
          Studio Ghibli API (v1.0.1)
          </h1>
          <p className="text-white text-sm leading-6 ">
          The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources
          </p>
          <button className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-24 mr-16 mt-5  ">
            More!
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
