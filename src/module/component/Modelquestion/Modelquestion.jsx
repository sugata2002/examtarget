import React, { useState } from "react";
import Navbar from "../../reuse/Navbar";
import Advertisement from "../../reuse/Advertisement";
import Footer from "../../reuse/Footer";

function Modelquestion() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Advertisement Section */}
            <div className="px-4 md:px-36 pt-6">
                <Advertisement />
            </div>

            {/* Main Content */}
            <div className="px-4 md:px-36 pt-6">
                <div className="bg-blue-600 p-4 sm:p-6 rounded-2xl w-full  mx-auto">
                    {/* Header Section */}
                    <div className="flex justify-between items-center bg-white p-3 sm:p-4 rounded-lg">
                        <span className="font-semibold text-black text-base sm:text-lg md:text-xl">
                            UPSC CDS Model Question Papers:
                        </span>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                            alt="icon"
                            className="w-5 sm:w-6 h-5 sm:h-6"
                        />
                    </div>

                    {/* Paper Sections */}
                    <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                        {/* Paper 1 */}
                        <div className="bg-gray-300 p-4 sm:p-6 rounded-lg">
                            <div
                                className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="flex items-center font-semibold text-sm sm:text-lg">
                                    {isOpen ? "▼" : "▶"} CDS Model Paper 1 Mathematics
                                </span>
                                {/* Language Selection */}
                                <div className="mt-2 sm:mt-0">
                                    <label className="mr-2 text-sm sm:text-base">Language :</label>
                                    <select className="border rounded px-2 py-1 text-sm sm:text-base">
                                        <option>English</option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                            </div>

                            {/* Buttons (Only show if expanded) */}
                            {isOpen && (
                                <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <button className="bg-white text-black text-sm sm:text-base px-4 py-2 rounded-md border w-full sm:w-auto">
                                        Start Learn Test
                                    </button>
                                    <button className="bg-white text-red-600 text-sm sm:text-base px-4 py-2 rounded-md border w-full sm:w-auto">
                                        Start Full Test
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertisement Bottom */}
            <div className="px-4 md:px-36 pt-6">
                <Advertisement />
            </div>
            <div className="pt-11">
                <Footer />
            </div>
        </div>
    );
}

export default Modelquestion;
