import React from "react";

const Header = () => {
  return (
    <header className="h-20 flex items-center justify-between px-6 bg-[#1a1a1a] border-b border-gray-700">
      <div className="text-3xl font-bold text-white mb-[6px]">BOOKS</div>
      <nav className="space-x-6 text-gray-300 font-medium">
        <a href="#features" className="hover:text-white transition-colors">
          Features
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          Pricing
        </a>
        <a href="#docs" className="hover:text-white transition-colors">
          Docs
        </a>
        <a href="#login" className="hover:text-white transition-colors">
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;
