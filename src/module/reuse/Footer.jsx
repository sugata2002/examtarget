import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 pt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex gap-4 text-xl">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <p className="text-sm">© Designed by Exams Target</p>
        </div>

        {/* Right Section - Logo & Links */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <FontAwesomeIcon icon={faBullseye} />
            <span>Exams Target</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
