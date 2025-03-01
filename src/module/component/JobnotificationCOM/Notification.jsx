import React from "react";
import Navbar from "../../reuse/Navbar";
import Footer from "../../reuse/Footer";
import Advertisement from "../../reuse/Advertisement";

function Notification() {
    return (
        <div>
            <Navbar />

            <div className="md:mx-36 sm:mx-10 pt-9">
                <Advertisement />
            </div>


            <div className="md:mx-36 sm:mx-10 pt-9">

                <div className="bg-blue-600 p-4 rounded-2xl w-full mx-auto">
                    {/* Header with Red Dot */}
                    <div className="flex items-center bg-white p-3 rounded-lg">
                        <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <span className="font-semibold text-black text-sm md:text-base">
                            Job Notification
                        </span>
                    </div>

                    {/* Job List */}
                    <div className="bg-gray-300 p-4 mt-4 rounded-lg cursor-pointer">
                        <ul className="list-disc pl-5 text-black text-sm md:text-base space-y-2">
                            <li>
                                Army Ordnance Corps AOC Various Post Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 22/12/2024</span>
                            </li>
                            <li>
                                Coast Guard Assistant Commandant Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 24/12/2024</span>
                            </li>
                            <li>
                                BSF Constable GD Sports Quota Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 30/12/2024</span>
                            </li>
                            <li>
                                Naval Dockyard Visakhapatnam Apprentices Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 02/01/2025</span>
                            </li>
                            <li>
                                RSMSSB Junior Engineer JEn Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 27/12/2024</span>
                            </li>
                            <li>
                                UPSSSC 10+2 Junior Assistant Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 22/01/2025</span>
                            </li>
                            <li>
                                Bihar Vidhan Sabha Security Guard Online Form 2024{" "}
                                <span className="text-red-600">Last Date: 13/12/2024</span>
                            </li>
                            <li>
                                Bihar Vidhan Sabha Advt No 02/2023 to 05/2023 Online Form{" "}
                                <span className="text-red-600">Last Date: 13/12/2024</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="md:mx-36 sm:mx-10 pt-9">
                <Advertisement />
            </div>

            <div className="pt-11">
                <Footer />
            </div>
        </div>
    );
}

export default Notification;
