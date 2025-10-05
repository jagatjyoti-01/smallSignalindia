import React from "react";
import logo from "../../assets/ssi_logo.jpeg"

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo} // replace with your logo path
            alt="Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#1f2c5c]">
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">IoT Solutions</a>

          {/* Dropdown - EdTech */}
          <div className="relative group">
            <button className="flex items-center hover:text-gray-800">
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

            {/* Submenu */}
            <div className="absolute left-0 mt-2 w-44 bg-white  rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 invisible group-hover:visible">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Online Learning
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Smart Classrooms
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Virtual Labs
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-gray-800">EMS Products</a>
          <a href="#" className="hover:text-gray-800">Manufacturing</a>
          <a href="#" className="hover:text-gray-800">Shop</a>

          {/* Dropdown - More */}
          <div className="relative group">
            <button className="flex items-center hover:text-gray-800">
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

            {/* Submenu for More */}
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition-all duration-200 invisible group-hover:visible">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                About Us
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Careers
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Sign In Button */}
        <div>
          <a
            href="#"
            className="px-5 py-2 rounded-full bg-[#1dabaa] text-white font-semibold text-sm hover:bg-[#152046]"
          >
            SIGN IN
          </a>
        </div>
      </div>
    </header>
  );
}
