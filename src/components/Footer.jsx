import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center text-gray-400 border-t border-gray-700 bg-[#1a1a1a]">
      © {new Date().getFullYear()} BOOKS. All rights reserved.
    </footer>
  );
};

export default Footer;
