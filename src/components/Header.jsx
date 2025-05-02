import React from "react";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-6 bg-[#1a1a1a] border-b border-gray-700 text-white">
      <div className="text-3xl font-bold mb-[6px] cursor-pointer transition duration-200 hover:text-gray-300 hover:scale-105">
        BOOKS
      </div>
      <nav className="space-x-6 text-gray-300 font-medium flex items-center">
        <p className="hover:text-white transition-colors cursor-pointer">
          Browse
        </p>
        <p className="hover:text-white transition-colors cursor-pointer">
          About
        </p>
        <p className="hover:text-white transition-colors cursor-pointer">FAQ</p>
      </nav>
      <div className="space-x-4">
        <button className="px-4 py-2 rounded-md bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition cursor-pointer">
          Sign In
        </button>
        <button className="px-4 py-2 rounded-md bg-white cursor-pointer text-black hover:bg-gray-200 transition">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
