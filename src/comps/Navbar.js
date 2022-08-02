import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh]">
      <div className="main-container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-extrabold tracking-widest text-white uppercase md:text-3xl">
              CockTails
            </h1>
          </div>
          <div className="flex gap-10">
            <Link
              to="/"
              className="text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold text-white uppercase transition-all duration-300 ease-in-out hover:text-gray-300"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
