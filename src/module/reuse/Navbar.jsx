import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/homepage/examtargetlogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mx-7 mt-5">
      <div className="bg-[#0066FF] h-[5rem] rounded-xl text-white px-6 sm:px-3 py-3 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center">
          <img className="w-[6.5rem] sm:w-[3.5rem]" src={Logo} alt="Logo" />
          <h1 className="text-xl sm:text-base font-semibold">Exams Target</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#job-notification" className="hover:underline">Job Notification</a>
            <a href="#exams" className="hover:underline">Exams</a>
            <a href="#about" className="hover:underline">About</a>
          </div>

          {/* Search Icon */}
          <div className="ml-6">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 text-white p-4 rounded-xl mt-2">
          <a href="#home" className="block py-2">Home</a>
          <a href="#job-notification" className="block py-2">Job Notification</a>
          <a href="#exams" className="block py-2">Exams</a>
          <a href="#about" className="block py-2">About</a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
