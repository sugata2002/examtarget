import React from 'react';
import Navbar from '../../reuse/Navbar';
import Advertisement from '../../reuse/Advertisement';
import Footer from '../../reuse/Footer';

function Question() {
    return (
        <div>
            <Navbar />

            <div className="md:mx-36 sm:mx-10 pt-9">
                <Advertisement />
            </div>


            <div className="md:mx-36 sm:mx-10 pt-9">
                <div className="bg-blue-600 p-6 rounded-2xl w-full  mx-auto">
                    {/* Header Section */}
                    <div className="flex justify-between items-center bg-white p-4 rounded-lg">
                        <span className="font-semibold text-black text-lg md:text-xl">
                            UPSC CDS Model Question Papers:
                        </span>
                        <img
                            src="/path-to-logo.png"
                            alt="Logo"
                            className="w-12 h-12"
                        />
                    </div>

                    {/* Paper Sections */}
                    <div className="space-y-6 mt-6">
                        {/* Paper 1 */}
                        <div className="bg-gray-300 p-6 rounded-lg">
                            <h2 className="text-black font-semibold text-lg">Papers: 1</h2>
                            <ul className="list-disc pl-5 text-black text-base space-y-2">
                                <li>CDS Model Paper 1 Mathematics</li>
                                <li>CDS Model Paper 1 English</li>
                                <li>CDS Model Paper 1 General Knowledge</li>
                            </ul>
                        </div>
                        {/* Paper 2 */}
                        <div className="bg-gray-300 p-6 rounded-lg">
                            <h2 className="text-black font-semibold text-lg">Papers: 2</h2>
                            <ul className="list-disc pl-5 text-black text-base space-y-2">
                                <li>CDS Model Paper 2 Mathematics</li>
                                <li>CDS Model Paper 2 English</li>
                                <li>CDS Model Paper 2 General Knowledge</li>
                            </ul>
                        </div>
                        {/* Paper 3 */}
                        <div className="bg-gray-300 p-6 rounded-lg">
                            <h2 className="text-black font-semibold text-lg">Papers: 3</h2>
                            <ul className="list-disc pl-5 text-black text-base space-y-2">
                                <li>CDS Model Paper 3 Mathematics</li>
                                <li>CDS Model Paper 3 English</li>
                                <li>CDS Model Paper 3 General Knowledge</li>
                            </ul>
                        </div>
                        {/* Paper 4 */}
                        <div className="bg-gray-300 p-6 rounded-lg">
                            <h2 className="text-black font-semibold text-lg">Papers: 4</h2>
                            <ul className="list-disc pl-5 text-black text-base space-y-2">
                                <li>CDS Model Paper 4 Mathematics</li>
                                <li>CDS Model Paper 4 English</li>
                                <li>CDS Model Paper 4 General Knowledge</li>
                            </ul>
                        </div>
                        {/* Paper 5 */}
                        <div className="bg-gray-300 p-6 rounded-lg">
                            <h2 className="text-black font-semibold text-lg">Papers: 5</h2>
                            <ul className="list-disc pl-5 text-black text-base space-y-2">
                                <li>CDS Model Paper 5 Mathematics</li>
                                <li>CDS Model Paper 5 English</li>
                                <li>CDS Model Paper 5 General Knowledge</li>
                            </ul>
                        </div>
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

export default Question;
