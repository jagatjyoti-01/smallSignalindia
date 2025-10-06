import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/ssi_logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#1f2c5c]">
          <a href="#" className="hover:text-[#1dabaa] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">
            IoT Solutions
          </a>

          {/* Dropdown - EdTech */}
          <div className="relative group">
            <button className="flex items-center hover:text-[#1dabaa] transition-colors">
              EdTech
              <svg
                className="w-3 h-3 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 invisible group-hover:visible">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Online Learning
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Smart Classrooms
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Virtual Labs
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-[#1dabaa] transition-colors">
            EMS Products
          </a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">
            Manufacturing
          </a>
          <a href="#" className="hover:text-[#1dabaa] transition-colors">
            Shop
          </a>

          {/* Dropdown - More */}
          <div className="relative group">
            <button className="flex items-center hover:text-[#1dabaa] transition-colors">
              More
              <svg
                className="w-3 h-3 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.65a.75.75 0 01-1.1 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 invisible group-hover:visible">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Careers
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Sign In (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-[#1dabaa] text-white font-semibold text-sm hover:bg-[#152046] transition-all"
          >
            SIGN IN
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-[#1f2c5c] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <FaTimes
            className="text-[#1f2c5c] cursor-pointer"
            size={24}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <nav className="flex flex-col p-6 space-y-4 text-[#1f2c5c] font-medium text-base">
          <a href="#" className="hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" className="hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
            IoT Solutions
          </a>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-[#1dabaa]">
              EdTech
              <span className="ml-2">▼</span>
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                Online Learning
              </a>
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                Smart Classrooms
              </a>
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                Virtual Labs
              </a>
            </div>
          </details>

          <a href="#" className="hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
            EMS Products
          </a>
          <a href="#" className="hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
            Manufacturing
          </a>
          <a href="#" className="hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-[#1dabaa]">
              More
              <span className="ml-2">▼</span>
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                About Us
              </a>
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                Careers
              </a>
              <a href="#" className="block hover:text-[#1dabaa]" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </details>

          <a
            href="#"
            className="mt-4 inline-block text-center px-5 py-2 rounded-full bg-[#1dabaa] text-white font-semibold hover:bg-[#152046] transition-all"
            onClick={() => setMenuOpen(false)}
          >
            SIGN IN
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
